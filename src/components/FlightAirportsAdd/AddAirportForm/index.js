import React from 'react'
import airportsService from "../../../services/airports";

function handleSubmit() {
    //airportsService.addAirport(data)
}

export default function AddAirportForm({onSubmit}) {
    return (
        <div className="AddAirportForm">
            <form onSubmit={handleSubmit}>
                <h1>Inisira os dados do Aeroporto</h1>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="inputAirportID">Aeroporto ID</label>
                        <input type="text" className="form-control" id="inputAirportID" placeholder="SSA" minLength="3" maxLength="3" />
                    </div>
                    <div className="form-group col-md-8">
                        <label for="inputAirportName">Nome</label>
                        <input type="text" className="form-control" id="inputAirportName" placeholder="Dep. Antonio Carlos Magalhães" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="inputCityID">Cidade ID</label>
                        <input type="text" className="form-control" id="inputCityID" placeholder="SSA" minLength="3" maxLength="3" />
                    </div>
                    <div className="form-group col-md-8">
                        <label for="inputCityName">Nome</label>
                        <input type="text" className="form-control" id="inputCityName" placeholder="Salvador" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="inputCountryID">Pais ID</label>
                        <input type="text" className="form-control" id="inputCountryID" placeholder="BR" minLength="2" maxLength="3" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputCountryName">Nome</label>
                        <input type="text" className="form-control" id="inputCountryName" placeholder="Brasil" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputContinentID">Continente</label>
                        <select id="inputContinentID" className="form-control">
                            <option selected>Selecione...</option>
                            <option>América do Norte</option>
                            <option>América Central</option>
                            <option>América do Sul</option>
                            <option>Europa</option>
                            <option>Ásia</option>
                            <option>Africa</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label for="inputlatitude">Latitude</label>
                            <input type="text" className="form-control" id="inputlatitude" placeholder="-15.30604" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputLongitude">Longitude</label>
                            <input type="text" className="form-control" id="inputLongitude" placeholder="-40.34064" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputTimezone">Timezone</label>
                            <input type="text" className="form-control" id="inputTimezone" placeholder="Brasília (GMT -3)" />
                        </div>
                        
                    </div>
                    <div className="form-group col-md-10">
                        <div className="btnSaveForm">
                            <button type="submit" className="btn btn-primary">Salvar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}