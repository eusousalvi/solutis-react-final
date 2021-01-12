import React from 'react'
import FlightEditForm from '../../components/FlightEditForm'
import Header from '../../components/Header'

function AirportEdit() {
    return (
        <>
            <Header />
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
