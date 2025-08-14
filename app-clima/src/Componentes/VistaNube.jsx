import React, { useEffect, useState } from 'react';
import Clima from './Clima';

const VistaNube = () => {
  const [dato, setDato] = useState(null);

  
    const clima = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=34,3559&lon=58,2255&appid=81bf34a5328649550ed81c131ec9cb61&units=metric&lang=es`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDato([data])
            })
            .catch(err => console.error(err));
          

    }
    useEffect(() => {
        clima();

    }, []);
  
  
    return (
     <div> 
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