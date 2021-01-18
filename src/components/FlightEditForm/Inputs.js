import React from 'react'
import { GlobalContext } from './GlobalContext'

function Inputs() {

    const global = React.useContext(GlobalContext)

    //--------Masks-----------//
    const numberMask = (value) => {
        return value.replace(/\D/g, '')
    }
    const textMask = (value) => {
        return value.replace(/\w/g, x => x.toUpperCase())
            .replace(/[0-9]/g, '')
    }
    const latilong = (value) => {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{1})(\d)/, '$1.$2')
        //It is needed to set maxlenght on input to 8, because must have 7 decimal digits after number +"."
    }
    const gmtMask = (value) => {
        return value
            .replace(/[^0-9+-]/gi, '')
    }

    return (
        <>
            <div className="row">
                <div className="col row-style">
                    <a className="btn btn-warning button-space" href="/flights/"> Sair</a>
                    <a className="btn btn-success button-space" data-bs-toggle="modal" data-bs-target="#confirmModal" >Salvar</a>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <div className="form-floating">
                        <input type="text" name="code" maxLength="3" placeholder="Digite" value={global.form.code} onChange={(e) => {
                            global.setInput({ code: textMask(e.target.value) })
                        }} className="form-control input-space code" id="floatingInput" />
                        <label for="floatingInput">Código</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="cityCode" placeholder="Digite" maxLength="3" value={global.form.citycode} onChange={(e) => {
                            global.setInput({ citycode: textMask(e.target.value) })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Código da Cidade</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="country" placeholder="Digite" value={global.form.countryname} onChange={(e) => {
                            global.setInput({ countryname: e.target.value })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">País</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="continent" placeholder="Digite" maxLength="3" value={global.form.continentId} onChange={(e) => {
                            global.setInput({ continentId: numberMask(e.target.value) })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Id do Continente</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" name="lat" placeholder="Digite" maxLength="8" value={global.form.latitude} onChange={(e) => {
                            global.setInput({ latitude: latilong(e.target.value) })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Latitude</label>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="form-floating">
                        <input type="text" name="name" placeholder="Digite" value={global.form.name} onChange={(e) => {
                            global.setInput({ name: e.target.value })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="city" placeholder="Digite" value={global.form.cityname} onChange={(e) => {
                            global.setInput({ cityname: e.target.value })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Cidade</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="countryCode" placeholder="Digite" maxLength="4" value={global.form.countrycode} onChange={(e) => {
                            global.setInput({ countrycode: textMask(e.target.value) })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Código do País</label>
                    </div>
                    <div className="form-floating input-width">
                        <input type="text" name="timezone" placeholder="Digite" maxLength="3" value={global.form.timezone} onChange={(e) => {
                            if (Number(e.target.value) > 12 || Number(e.target.value) < -12) {
                                alert("Digite um valor entre -12 à +12!")
                            }
                            else {
                                global.setInput({ timezone: gmtMask(e.target.value) })
                            }
                        }} className="form-control input-space input-correct" id="floatingInput" />
                        <label for="floatingInput">Timezone</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" name="long" placeholder="Digite" maxLength="8" value={global.form.longitude} onChange={(e) => {
                            global.setInput({ longitude: latilong(e.target.value) })
                        }} className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Longitude</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inputs
