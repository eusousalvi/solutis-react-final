import React, { useState } from 'react'
import './style.css'

function FlightEditForm() {

    // const [code, setCode] = useState("")
    // const [cityCode, setCityCode] = useState("")
    // const [country, setCountry] = useState("")
    // const [continent, setContinent] = useState("")
    // const [lat, setLat] = useState("")
    // const [long, setLong] = useState("")
    // const [timezone, setTimezone] = useState("")
    // const [countryCode, setCountryCode] = useState("")
    // const [city, setCity] = useState("")
    // const [name, setName] = useState("")
    const airport =
    {
        code: '',
        cityCode: '',
        country: '',
        continent: '',
        lat: '',
        long: '',
        timezone: '',
        countryCode: '',
        city: '',
        name: ''

    }
    const [form, setForm] = useState(airport)

    const setInput = (newValue) => {
        setForm(form => ({...form, ...newValue}))
    }
    
    return (
        <div className="container">
            <h3 className="borda">Edição de Aeroporto</h3>
            <div className="row">
                <div className="col row-style">
                    <button className="btn btn-success button-space" onClick={(e) => { console.log(form)}} >Salvar</button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <form action="" className="form-space">

                        <div className="form-floating">
                            <input type="text" name="code" placeholder="Digite" maxLength="3" onChange={(e) => {
                                setInput({code: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código</label>
                        </div>
                        {/* {console.log(code)} */}
                        <div className="form-floating">
                            <input type="text" name="cityCode" placeholder="Digite" maxLength="3" onChange={(e) => {
                                setInput({cityCode: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código da Cidade</label>
                        </div>
                        {/* {console.log(cityCode)} */}

                        <div className="form-floating">
                            <input type="text" name="country" placeholder="Digite" onChange={(e) => {
                                setInput({country: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">País</label>
                        </div>
                        {/* {console.log(country)} */}
                        <div className="form-floating">
                            <input type="number" name="continent" placeholder="Digite" maxLength="3" onChange={(e) => {
                                setInput({continent: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Id do Continente</label>
                        </div>
                        {/* {console.log(continent)} */}
                        <div className="form-floating">
                            <input type="number" name="lat" placeholder="Digite" onChange={(e) => {
                                setInput({lat: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Latitude</label>
                        </div>
                        {/* {console.log(lat)} */}
                    </form>
                </div>
                <div className="col-xs-12 col-md-6">
                    <form action="" className="form-space">
                        <div className="form-floating">
                            <input type="text" name="name" placeholder="Digite" onChange={(e) => {
                                setInput({name: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Nome</label>
                        </div>
                        {/* {console.log(name)} */}
                        <div className="form-floating">
                            <input type="text" name="city" placeholder="Digite" onChange={(e) => {
                                setInput({city: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Cidade</label>
                        </div>
                        {/* {console.log(city)} */}
                        <div className="form-floating">
                            <input type="text" name="countryCode" placeholder="Digite" maxLength="4" onChange={(e) => {
                                setInput({countryCode: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código do País</label>
                        </div>
                        {/* {console.log(countryCode)} */}
                        <div className="form-floating">
                            <input type="number" name="timezone" placeholder="Digite" maxLength="5" onChange={(e) => {
                                setInput({timezone: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Timezone</label>
                        </div>
                        {/* {console.log(timezone)} */}
                        <div className="form-floating">
                            <input type="number" name="long"placeholder="Digite" onChange={(e) => {
                                setInput({long: e.target.value})
                            }} className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Longitude</label>
                        </div>
                        {/* {console.log(long)} */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FlightEditForm
