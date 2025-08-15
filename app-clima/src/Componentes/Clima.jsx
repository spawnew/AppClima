import React from 'react'

const Clima = ({ temp, temp_min, temp_max, humedad, weather }) => {
    
    const obtenerEmogi = (temp) => {
        if (temp > 25) {
            return "🌞"
        }
        if (temp > 15 && temp <= 25) {
            
            return "🌤️"
        }
        else {
            return "❄️";
        }
      



    }
    
    
    return (
        <div className={temp > 20 ?' bg-linear-to-r from-amber-300 to-orange-600 m-5 p-8 rounded-lg shadow- text-black border-amber-400 border-2' : 'bg-linear-to-r from-blue-700 to-blue-400 m-5 p-8 rounded-lg shadow- text-white border-blue-400 border-3'} >
           {obtenerEmogi(temp)}<p>Temperatura : <b>{ temp}°C</b></p>
          <p>Temperatura Max : <b>{temp_min}°C</b></p>
          <p>Temperatura Min : <p>Temperatura Max : <b>{temp_max}°C</b></p>
</p>
            <p className={humedad > 50 ? 'text-blue-850 text-2md ' : 'text-black'}>Humedad  <b>{ humedad}</b> %</p>
          <p>Clima : <b>{weather}</b></p>
           
          



    </div>
  )
}

export default Clima