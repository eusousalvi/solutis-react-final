import React from 'react'
//import Header from '../../components/Header'
import AddAirportForm from '../../components/FlightAirportsAdd/AddAirportForm'
import FlightsHeader from '../../components/FlightsHeader'
import './styles.css'

function handleFormSubmit() {
    alert("Nada foi enviado ainda pois não conexão com a API")
}

function AddAirport() {
    return (
        <div>
            <FlightsHeader/>
            <AddAirportForm onSubmit={handleFormSubmit}/>
        </div>
    )
}
export default AddAirport