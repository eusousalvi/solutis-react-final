import React, { useEffect, useState } from 'react'
import { GlobalStorage } from './GlobalContext';
import Inputs from './Inputs';
import Modal from './Modal';


import './style.css'

function FlightEditForm() {

    return (
        <GlobalStorage>
            <div className="container">
              <Modal />
                {/* Close Modal */}
                <form onSubmit={global.handleSubmit} className="form-space">
                    <h3 className="borda">Edição de Aeroporto </h3>
                    <Inputs />
                </form>
            </div>
        </GlobalStorage>
    )
}

export default FlightEditForm
