import React from 'react'
import { useState } from 'react'
const FormClima = ({ obtener }) => {

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
        <div className='bg-blue-300 m-2 p-2 rounded-lg shadow- text-black flex flex-col justify-center align-center'>

          
                 <h3 className='text-blue-950'><b>INGRESE UN LUGAR</b> </h3>

            



            <form onSubmit={handleSubmit}>
                <input className='bg-amber-50 rounded-b-sm p-1' type="text"required onChange={handleChange} name="lugar" value={form.latitud} placeholder='ingrese un lugar'>
                </input>
               

                <input className='bg-blue-700 p-2 m-2 rounded-xl text-amber-50' type="submit" ></input>

            </form>


        </div>
    )
}

export default FormClima;