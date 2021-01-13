import React from 'react'
//import Header from '../../components/Header'
import AddAirportForm from '../../components/FlightAirportsAdd/AddAirportForm'
import FlightsHeader from '../../components/FlightsHeader'
import airportsService from "../../services/airports"
import './styles.css'

/*
function handleSubmit() {
    //airportsService.addAirport(data)
    alert("vai ter coisa aqui cuzao")
}
*/


function AddAirport() {
    return (
        <div>
            <FlightsHeader/>
            <AddAirportForm/>
        </div>
    )
}
export default AddAirport