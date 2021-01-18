import React from 'react'
import AddAirportForm from '../../components/FlightAirportsAdd/AddAirportForm'
import FlightsHeader from '../../components/FlightsHeader'
import './styles.css'


function AddAirport() {
    return (
        <div>
            <FlightsHeader/>
            <AddAirportForm/>
        </div>
    )
}
export default AddAirport