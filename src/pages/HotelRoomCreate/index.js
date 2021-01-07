import { roomsList } from "../../utils/RoomArrays/roomsList";
import { hotelsList } from "../../utils/RoomArrays/hotelsList";
import { amenitiesList } from "../../utils/RoomArrays/amenitiesList";
import { useState } from "react"

function HotelRoomCreate(){
    const [form, setForm] = useState({
        "status": "enabled",
        "price": 0,
        "type": "",
        "hotel": "",
        "quantity": 0,
        "stay": 0,
        "adult": 0,
        "child": 0,
        "bed": 0,
        "charge": 0,
        "amenities": []
        },
    );
    function handleChange(category,value){
        const aux = form;
        aux[category] = value;
        setForm(aux);
        console.log(category, value, aux);
    }
    return (
    <div className="mx-auto">
        <form>
            <div className="form-row">
                <div className="form-group col-6">
                <label for="Status">Status</label>
                <select className="form-select" aria-label="Status" id="status" onChange={(e)=>handleChange(e.target.id,e.target.value)}>
                    <option value="enabled">Enabled</option>
                    <option value="disabled">Disabled</option>
                </select>
                </div>

            <div className="form-col"></div>
                <label for="Price" className="form-label">Price</label>
                <input type="number" className="form-control" id="Price"
                placeholder="Price" aria-label="Price"/>
            </div>

            <div className="col">
                <select className="form-select" aria-label="RoomType" >
                    {roomsList.map(e=><option value={e}>{e}</option>)}
                </select>
            </div>

            <div className="col">
                <select className="form-select" aria-label="Hotel">
                    {hotelsList.map(e=><option value={e}>{e}</option>)}
                </select>
            </div>

            <input type="number" className="form-control"
            placeholder="Quantity" aria-label="Quantity"/>

            <input type="number" className="form-control"
            placeholder="Mininum Stay" aria-label="MinStay"/>

            <input type="number" className="form-control"
            placeholder="Max Adults" aria-label="MaxAdults"/>

            <input type="number" className="form-control"
            placeholder="Max Children" aria-label="MaxChild"/>

            <input type="number" className="form-control"
            placeholder="Extra Beds" aria-label="ExtraBeds"/>

            <input type="number" className="form-control"
            placeholder="Beds Charges" aria-label="BedsCharges"/>

            <input type="checkbox" aria-label="SelectAll"></input>
            <label for="SelectAll"className="form-label">SelectAll</label>

            {amenitiesList.map(e=>
                <div >
                    <input type="checkbox" aria-label={e} value="on"></input>
                    <label for={e} className="form-label">{e}</label>
                </div>
            )}

            <button type="submit" className="btn btn-primary">SUBMIT</button>
        </form>
    </div>
    );
}
export default HotelRoomCreate;
