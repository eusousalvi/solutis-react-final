import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import airportsService from "../../services/airports";

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
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

    const [clicked, setClicked] = useState(false)

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
        setClicked(false)
    }

    return (
        <GlobalContext.Provider value={{setInput, handleSubmit, form}}>{children}</GlobalContext.Provider>
    )
}