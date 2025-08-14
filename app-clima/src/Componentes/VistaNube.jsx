import React, { useEffect, useState } from 'react';


const VistaNube = () => {
  const [dato, setDato] = useState(null);

  
    const clima = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=81bf34a5328649550ed81c131ec9cb61&units=metric&lang=es`)
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
      
        
        
        
        
        
        <div><p>NUBE</p>
          

  











    </div>
  )
}

export default VistaNube