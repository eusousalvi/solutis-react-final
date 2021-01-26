import { useSelector } from "react-redux"

function AirportsLoadingBar() {

    const loading = useSelector(state => state.airports.loading)

    return (
        <div className="progress p-0">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: `${loading}%`}} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    )
}

export default AirportsLoadingBar