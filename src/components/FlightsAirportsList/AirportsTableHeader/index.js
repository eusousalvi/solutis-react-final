import "./styles.css"
import { useDispatch, useSelector } from "react-redux";
import { sortAirports } from "../../../redux/actions/airports";
import { GoArrowUp, GoArrowDown } from "react-icons/go";

function AirportsTableHeader({ fields, prefix, toggleCheck }) {

    const dispatch = useDispatch()
    const { sortBy, order } = useSelector(state => state.airports)

    function handleChangeOrder(fieldName) {
        
        fieldName = getFieldName(fieldName)
        
        dispatch(sortAirports(fieldName))
    }

    function getFieldName(name) {
        return  name === "Continent Id" ? "continentId" : name.toLowerCase().replace(/\s+/g, '');
    }

    return (
        <thead>
            
            <tr>
                <th scope="col">
                    <input type="checkbox"
                        className="form-check-input"
                        id="selectAirports"
                        onChange={toggleCheck}
                    />
                </th>
                <th scope="col">#</th>
                {
                    fields.map(field => {
                        const isActive = sortBy === getFieldName(field)
                        return (
                            <th scope="col" 
                                className={`airports-table-title ${prefix+field} ${isActive ? "d-flex" : ""}`} 
                                key={field}
                                onClick={() => handleChangeOrder(field)}
                            >
                                {isActive && (
                                        <>
                                        {
                                        order ? 
                                            <GoArrowUp /> 
                                            : 
                                            <GoArrowDown />
                                        }
                                        </>
                                )}
                                {field}
                            </th>
                        )
                    }
                    )
                }
                <th className="airportsActions"></th>
            </tr>
        </thead>
    )
}

export default AirportsTableHeader