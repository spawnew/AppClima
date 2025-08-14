import React from 'react'
import { useState } from 'react'
const FormCancion = ({ obtener }) => {

    const [form, setForm] = useState({ lugar:"" })
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
        setForm({ lugar:"" })
    }
    return (
        <div>






            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="lugar" value={form.latitud} placeholder='ingrese un lugar'>
                </input>
               

                <input type="submit" ></input>

            </form>


        </div>
    )
}

export default FormCancion;