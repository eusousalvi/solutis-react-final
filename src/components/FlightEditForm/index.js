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
    //--------Masks-----------//
    const numberMask = (value) => {
        return value.replace(/\D/g, '')
    }
    const textMask = (value) => {
        return value.replace(/\w/g,  x => x.toUpperCase())
        .replace(/[0-9]/g, '')
    }
    const latilong = (value) => {
        return value.replace(/\D/g, '')
        .replace(/(\d{1})(\d)/, '$1.$2')
        //It is needes to set maxlenght on input to 8, because must have 7 decimal digits after number +"."
    }
    const gmtMask = (value) => {
        return value.replace(/^[0-9+-]/g, '')
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
                            <input type="text" name="code" maxLength="3" placeholder="Digite" value={form.code} onChange={(e) => {
                                setInput({ code: textMask(e.target.value) })
                            }} className="form-control input-space code" id="floatingInput" />
                            <label for="floatingInput">Código</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" name="cityCode" placeholder="Digite" maxLength="3" value={form.citycode} onChange={(e) => {
                                setInput({ citycode: textMask(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código da Cidade</label>
                        </div>


                        <div className="form-floating">
                            <input type="text" name="country" placeholder="Digite" value={form.countryname} onChange={(e) => {
                                setInput({ countryname: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">País</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="continent" placeholder="Digite" maxLength="3" value={form.continentId} onChange={(e) => {
                                setInput({ continentId: numberMask(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Id do Continente</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="lat" placeholder="Digite" maxLength="8" value={form.latitude} onChange={(e) => {
                                setInput({ latitude: latilong(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Latitude</label>
                        </div>

                    </div>
                    <div className="col-xs-12 col-md-6">

                        <div className="form-floating">
                            <input type="text" name="name" placeholder="Digite" value={form.name} onChange={(e) => {
                                setInput({ name: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Nome</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="city" placeholder="Digite" value={form.cityname} onChange={(e) => {
                                setInput({ cityname: e.target.value })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Cidade</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="countryCode" placeholder="Digite" maxLength="4" value={form.countrycode} onChange={(e) => {
                                setInput({ countrycode: textMask(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código do País</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="timezone" placeholder="Digite" maxLength="5" value={form.timezone} onChange={(e) => {
                                setInput({ timezone: gmtMask(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Timezone</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" name="long" placeholder="Digite" maxLength="8" value={form.longitude} onChange={(e) => {
                                setInput({ longitude: latilong(e.target.value) })
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Longitude</label>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default FlightEditForm
