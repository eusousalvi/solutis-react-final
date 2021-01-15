import React, {useState} from 'react'
import airportsService from "../../../services/airports";



export default function AddAirportForm() {
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

    const handleSubmit = (e) => {
        e.preventDefault()
        airportsService.addAirport(form)
    }

    const setInput = (newValue) => {
        setForm(form => ({ ...form, ...newValue }))
    }

    return (
        <div className="AddAirportForm">
            <form onSubmit={handleSubmit}>
                <h1>Inisira os dados do Aeroporto</h1>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="code">Aeroporto ID</label>
                        <input
                        required 
                        value={form.code} 
                        onChange={(e)=>{
                            setInput({code: e.target.value})
                        }}
                        type="text" className="form-control" 
                        id="code" 
                        placeholder="SSA" minLength="3" maxLength="3" />
                    </div>
                    <div className="form-group col-md-8">
                        <label for="name">Nome</label>
                        <input
                        required 
                        value={form.name} 
                        onChange={(e)=>{
                            setInput({name: e.target.value})
                        }}
                        type="text" className="form-control" id="name" placeholder="Dep. Antonio Carlos Magalhães" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="citycode">Cidade ID</label>
                        <input
                        required 
                        value={form.citycode} 
                        onChange={(e)=>{
                            setInput({citycode: e.target.value})
                        }}
                        type="text" className="form-control" id="citycode" placeholder="SSA" minLength="3" maxLength="3" />
                    </div>
                    <div className="form-group col-md-8">
                        <label for="cityname">Nome</label>
                        <input
                        required 
                        value={form.cityname} 
                        onChange={(e)=>{
                            setInput({cityname: e.target.value})
                        }}
                        type="text" className="form-control" id="cityname" placeholder="Salvador" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-2">
                        <label for="countrycode">Pais ID</label>
                        <input
                        required 
                        value={form.countrycode} 
                        onChange={(e)=>{
                            setInput({countrycode: e.target.value})
                        }}
                        type="text" className="form-control" id="countrycode" placeholder="BR" minLength="2" maxLength="3" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="countryname">Nome</label>
                        <input
                        required 
                        value={form.countryname} 
                        onChange={(e)=>{
                            setInput({countryname: e.target.value})
                        }}
                        type="text" className="form-control" id="countryname" placeholder="Brasil" />
                    </div>
                    <div className="form-group col-md-4">
                        <label for="continentId">Continente</label>
                        <input
                        required 
                        value={form.continentId} 
                        onChange={(e)=>{
                            setInput({continentId: e.target.value})
                        }}
                        type="number" className="form-control" id="continentId"/>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label for="Latitude">Latitude</label>
                            <input
                            required 
                            value={form.latitude} 
                            onChange={(e)=>{
                                setInput({latitude: e.target.value})
                            }}
                            type="number" className="form-control" id="Latitude" placeholder="-15.30604" />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="Longitude">Longitude</label>
                            <input
                            required 
                            value={form.longitude} 
                            onChange={(e)=>{
                                setInput({longitude: e.target.value})
                            }}
                            type="number" className="form-control" id="Longitude" placeholder="-40.34064" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="Timezone">Timezone</label>
                            <input
                            required 
                            value={form.timezone} 
                            onChange={(e)=>{
                                setInput({timezone: e.target.value})
                            }}
                            type="number" className="form-control" id="Timezone" placeholder="Brasília (GMT -3)" />
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