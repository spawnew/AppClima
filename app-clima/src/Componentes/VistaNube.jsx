import React, { useEffect, useState } from 'react';
import Clima from './Clima';
import FormuClima from './Formulario/FormuClima';
const VistaNube = () => {
    const [dato, setDato] = useState(null);
    const [ubicacion, setUbicacion] = useState({ ubicacion: null });
    const [ciudad, setCiudad] = useState({latitud : 0, longitud: 0})

const obtener = (form) => {
        console.log(form);
        setUbicacion({
          lugar: form.lugar
        })
    }


const {lugar}=ubicacion


    const obtenerCiudad = () => {
        if (lugar != "") {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${lugar}&appid=81bf34a5328649550ed81c131ec9cb61`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setCiudad({ latitud: data[0].lat, longitud: data[0].lon })
                })
                .catch(err => console.error(err));
        }
    }

    useEffect(() => {
        obtenerCiudad();
    }, [lugar]);
    
    const { latitud, longitud } = ciudad
    
    
    
 


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
        <div className= " flex flex-col  bg-blue-900 min-h-screen  items-center justify-center align-items: center">
            
            <div className=" bg-blue-300 p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
                     <p className='text-2xl'><b>{ lugar}</b></p>
                <FormuClima
                    obtener={obtener}
                 />
            
        
            <div>
      
            {dato && dato.map((item, index) => (
                <div  key={index}>
                     
                    
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
  
</div>










    </div>
  )
}

export default VistaNube