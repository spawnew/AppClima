import React from 'react'

const Clima = ({ temp, temp_min, temp_max, humedad, weather }) => {
    return (
        <div className={temp > 20 ?' bg-linear-to-r from-amber-300 to-orange-600 m-5 p-8 rounded-lg shadow- text-black ' : 'bg-linear-to-r from-blue-700 to-blue-400 m-5 p-8 rounded-lg shadow- text-white'} >
          <p>Temperatura:<b>{ temp}</b></p>
          <p>Temperatura Maxima:{temp_min}</p>
          <p>Temperatura Minima :{temp_max}</p>
            <p className={humedad>50?'text-blue-850 text-2md ':'text-black' }>Humedad:{humedad}%</p>
          <p>Clima:{weather}</p>
           
          



    </div>
  )
}

export default Clima