import React from 'react'
import './style.css'


function EditForm() {
    return (
        <div class="container">
            <h3 className="borda">Edição de Aeroporto</h3>
            <div className="row">
                <div className="col row-style">
                    
                    <button className="btn btn-success button-space">Salvar</button>
                    <button className="btn btn-danger button-space">Cancelar</button>
                   
                </div>
            </div>
            <div class="row">
                <div className="col-xs-12 col-md-6">
                    <form action="" className="form-space">

                        <div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código</label>
                        </div>
                        <div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Código da Cidade</label>
                        </div><div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">País</label>
                        </div><div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Id do Continente</label>
                        </div><div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Latitude</label>
                        </div><div className="form-floating">
                            <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                            <label for="floatingInput">Cidade</label>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 col-md-6">
                    <div className="form-floating">
                        <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Nome da Cidade</label>
                    </div><div className="form-floating">
                        <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Código do País</label>
                    </div><div className="form-floating">
                        <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Timezone</label>
                    </div><div className="form-floating">
                        <input type="text" placeholder="Digite" className="form-control input-space" id="floatingInput" />
                        <label for="floatingInput">Longitude</label>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditForm
