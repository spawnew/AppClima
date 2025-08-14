import React from 'react'

const Clima = ({ temp, temp_min, temp_max, humedad,weather }) => {
  return (
      <div>
          <p>Temperatura:{temp}</p>
          <p>Temperatura Maxima:{temp_min}</p>
          <p>Temperatura Minima :{temp_max}</p>
          <p>Humedad:{humedad}</p>
          <p>Clima:{weather}</p>
           
          



    </div>
  )
}

export default Clima