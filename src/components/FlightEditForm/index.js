import React, { useEffect, useState } from 'react'
import './style.css'

//import { getAirport, updateAirport } from '../../services/flightService'
import airportsService from "../../services/airports";
import { useParams } from 'react-router-dom'

function FlightEditForm() {

    const airport =
    {
        code: '',
        citycode: '',
        countryname: '',
        continentId: '',
        latitude: '',
        longitude: '',
        timezone: '',
        countrycode: '',
        cityname: '',
        name: ''

    }
    const [form, setForm] = useState(airport)

    const { id } = useParams()

    const setInput = (newValue) => {
        setForm(form => ({ ...form, ...newValue }))
    }

    useEffect(() => {
        const getData = async () => {
            const response = await airportsService.getAirportById(id)
            setForm(response.data)

        }
        getData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        airportsService.updateAirport(id, form)
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form-space">
                <h3 className="borda">Edição de Aeroporto</h3>
                <div className="row">
                    <div className="col row-style">
                        <button className="btn btn-success button-space" >Salvar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">

                        <div className="form-floating">
                            <input type="text" name="code" placeholder="Digite" value={form.code} onChange={(e) => {
                                setInput({ code: e.target.value })
                            }} className="form-control input-space code" id="floatingInput" />
                            <label for="floatingInput">Código</label>
                        </div>
                        {/* {console.log(code)} */}
                        <div className="form-floating">
                            <input type="text" name="cityCode" placeholder="Digite" maxLength="3" value={form.citycode} onChange={(e) => {
                                setInput({ citycode: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código da Cidade</label>
                        </div>
                        {/* {console.log(cityCode)} */}

                        <div className="form-floating">
                            <input type="text" name="country" placeholder="Digite" value={form.countryname} onChange={(e) => {
                                setInput({ countryname: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">País</label>
                        </div>
                        {/* {console.log(country)} */}
                        <div className="form-floating">
                            <input type="number" name="continent" placeholder="Digite" maxLength="3" value={form.continentId} onChange={(e) => {
                                setInput({ continentId: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Id do Continente</label>
                        </div>
                        {/* {console.log(continent)} */}
                        <div className="form-floating">
                            <input type="number" name="lat" placeholder="Digite" value={form.latitude} onChange={(e) => {
                                setInput({ latitude: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Latitude</label>
                        </div>
                        {/* {console.log(lat)} */}
                        {/* </form> */}
                    </div>
                    <div className="col-xs-12 col-md-6">
                        {/* <form action="" className="form-space"> */}
                        <div className="form-floating">
                            <input type="text" name="name" placeholder="Digite" value={form.name} onChange={(e) => {
                                setInput({ name: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Nome</label>
                        </div>
                        {/* {console.log(name)} */}
                        <div className="form-floating">
                            <input type="text" name="city" placeholder="Digite" value={form.cityname} onChange={(e) => {
                                setInput({ cityname: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Cidade</label>
                        </div>
                        {/* {console.log(city)} */}
                        <div className="form-floating">
                            <input type="text" name="countryCode" placeholder="Digite" maxLength="4" value={form.countrycode} onChange={(e) => {
                                setInput({ countrycode: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código do País</label>
                        </div>
                        {/* {console.log(countryCode)} */}
                        <div className="form-floating">
                            <input type="number" name="timezone" placeholder="Digite" maxLength="5" value={form.timezone} onChange={(e) => {
                                setInput({ timezone: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Timezone</label>
                        </div>
                        {/* {console.log(timezone)} */}
                        <div className="form-floating">
                            <input type="number" name="long" placeholder="Digite" value={form.longitude} onChange={(e) => {
                                setInput({ long: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Longitude</label>
                        </div>
                        {/* {console.log(long)} */}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FlightEditForm
