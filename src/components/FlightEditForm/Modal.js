import React from 'react'
import { GlobalContext } from './GlobalContext'
import success from '../../assets/success.gif'


function Modal() {
    const global = React.useContext(GlobalContext)
    return (
        // Confirm Modal
        <>
            <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Alterar formulário</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Tem certeza que deseja alterar os dados?
                    </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#successModal" data-bs-dismiss="modal" onClick={global.handleSubmit}>Alterar</button>
                        </div>
                    </div>
                </div>
            </div>

           {/* Success Modal */}

            <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header centered-modal">
                            <h5 class="modal-title" id="exampleModalLabel">Salvo com sucesso!</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body centered-modal">
                            <img src={success} data-bs-dismiss="modal"/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Modal
