import React from 'react'
import { useState } from 'react'
const FormCancion = ({ obtener }) => {

    const [form, setForm] = useState({ latitud: 0, longitud: 0 })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        obtener(form)
        setForm({ latitud: 0, longitud: 0 })
    }
    return (
        <div>






            <form onSubmit={handleSubmit}>
                <input type="number" onChange={handleChange} name="latitud" value={form.latitud} placeholder='ingrese la  latitud'>
                </input>
                <input type="number" onChange={handleChange} name="longitud" value={form.longitud} placeholder='ingrese la longitud '>
                </input>

                <input type="submit" ></input>

            </form>


        </div>
    )
}

export default FormCancion;