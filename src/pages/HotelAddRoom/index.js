import { roomTypes } from "../../utils/RoomArrays/roomTypes";
import { hotelsList } from "../../utils/RoomArrays/hotelList";
function HotelAddRoom(){

    return (
    <div class="mx-auto">
        <form>
            <div class="form-row">
                <div class="form-group col-6">
                <label for="Status">Status</label>
                <select class="form-select" aria-label="Status" id="Status">
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                </select>
                </div>

            <div class="form-col"></div>
            <label for="Price" class="form-label">Price</label>
                    <input type="number" class="form-control" id="Price"
                    placeholder="Price" aria-label="Price"/>
            </div>

            <div class="col">
                <select class="form-select" aria-label="RoomType">
                    {roomTypes.map(e=><option value={e}>{e}</option>)}
                </select>
            </div>

            <div class="col">
                <select class="form-select" aria-label="Hotel">
                    {hotelsList.map(e=><option value={e}>{e}</option>)}
                </select>
            </div>

            <input type="number" class="form-control"
            placeholder="Quantity" aria-label="Quantity"/>

            <input type="number" class="form-control"
            placeholder="Mininum Stay" aria-label="MinStay"/>

            <input type="number" class="form-control"
            placeholder="Max Adults" aria-label="MaxAdults"/>

            <input type="number" class="form-control"
            placeholder="Max Children" aria-label="MaxChild"/>

            <input type="number" class="form-control"
            placeholder="Extra Beds" aria-label="ExtraBeds"/>

            <input type="number" class="form-control"
            placeholder="Beds Charges" aria-label="BedsCharges"/>

            <button type="submit" class="btn btn-primary">SUBMIT</button>
        </form>
    </div>
    );
}
export default HotelAddRoom;
