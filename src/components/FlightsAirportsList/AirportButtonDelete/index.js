import { FaTimes } from "react-icons/fa";

function AirportButtonDelete({ id }) {

    const deleteAirport = () => {
        if(window.confirm("Você realmente quer remover esse aeroporto?"))
        {
            console.log("removido")
            // fazer requisição na api com o axios pra deletar o aeroporto com o id escolhido
        }
    }

    return (
        <>
            <button className="btn btn-danger" onClick={deleteAirport}>
                <FaTimes />
            </button>
        </>
    )
}

export default AirportButtonDelete