import React, { useEffect, useState } from 'react';
import Clima from './Clima';
import FormuClima from './Formulario/FormuClima';
const VistaNube = () => {
    const [dato, setDato] = useState(null);
    const [ubicacion, setUbicacion] = useState({ latitud: 0, longitud: 0 });
    const obtener = (form) => {
        console.log(form);
        setUbicacion({
            latitud: parseFloat(form.latitud),
            longitud: parseFloat(form.longitud)
        })
    }
const{ latitud, longitud } = ubicacion 

    const clima = () => {
        if (latitud && longitud) {
            
        
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=81bf34a5328649550ed81c131ec9cb61&units=metric&lang=es`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setDato([data])
                })
                .catch(err => console.error(err));
        }    

    }
    useEffect(() => {
        clima();

    },[latitud,longitud] );
  
  
    return (
        <div> <FormuClima
        obtener={obtener}
        />
            {dato && dato.map((item, index) => (
                <div key={index}>
                     
                    
                    <Clima
                    temp={item.main.temp}
                        temp_min={item.main.temp_min}
                        temp_max={item.main.temp_max}
                        humedad={item.main.humidity}
                        weather={item.weather[0].description}
                    
                    
                    
                    
                    
                    />




                </div> 
        
            
            
            
            
    ))
     }
   
          

  











    </div>
  )
}

export default VistaNube