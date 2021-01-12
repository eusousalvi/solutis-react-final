import React from 'react'
import FlightEditForm from '../../components/FlightEditForm'
import FlightsHeader from '../../components/FlightsHeader'
import Header from '../../components/Header'

function AirportEdit() {
    return (
        <>
            <FlightsHeader />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <FlightEditForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AirportEdit
