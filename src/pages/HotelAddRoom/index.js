import { roomTypes } from "../../utils/RoomArrays/roomTypes";
import { hotelsList } from "../../utils/RoomArrays/hotelList";
function HotelAddRoom(){    

    return (
    <div>        
        <form class="mb-3">
            <select class="form-select" aria-label="Status">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
            </select>

            <input type="number" class="form-control" 
            placeholder="Price" aria-label="Price"/>

            <select class="form-select" aria-label="RoomType">
                {roomTypes.map(e=><option value={e}>{e}</option>)}
            </select>

            <select class="form-select" aria-label="Hotel">
                {hotelsList.map(e=><option value={e}>{e}</option>)}
            </select>

            <input type="number" class="form-control" 
            placeholder="Quantity" aria-label="Quantity"/>

            <input type="number" class="form-control" 
            placeholder="Mininum Stay" aria-label="MinStay"/>

            <input type="number" class="form-control" 
            placeholder="Max Adults" aria-label="MaxAdults"/>

            <input type="number" class="form-control" 
            placeholder="Max Child" aria-label="MaxChild"/>

            <input type="number" class="form-control" 
            placeholder="Extra Beds" aria-label="ExtraBeds"/>

            <input type="number" class="form-control" 
            placeholder="Beds Charges" aria-label="BedsCharges"/>
            
        </form>
    </div>
    );
}
export default HotelAddRoom;
