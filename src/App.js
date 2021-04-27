import { useEffect, useState } from "react";
import { Citas } from "./componets/Citas";
import { Formulario } from "./componets/Formulario";



function App() {

  let citasIniciales = JSON.parse(localStorage.getItem('dates'));


  if(!citasIniciales){
    citasIniciales = [];
  }
  const [dates, giveDates] = useState(citasIniciales);

  useEffect(() =>{
    let citasIniciales = JSON.parse(localStorage.getItem('dates'));
    if(citasIniciales){
      citasIniciales = localStorage.setItem('dates',JSON.stringify(dates));

    }else{
      citasIniciales = localStorage.setItem('dates',JSON.stringify([]));
    }
  });

  const eliminarCita = (id) =>{
    const eliminarCita = dates.filter(cita => cita.id !== id);
    giveDates(eliminarCita);
  }
  

  const resibirCitas = cita =>{

    giveDates([...dates, cita]);

   

  }

  const mensaje = dates.length === 0 ? 'No hay citas' : 'Citas';

  
  

  

  return (
    <>

    

      <div className="container">
        <div className="row">

          <div className="one-half column">
            <Formulario

              resibirCitas={resibirCitas}
              
            />
          </div>
          <div className="one-half column">
          <h2>{mensaje}</h2>
            {
              dates.map(cita => (
                <Citas 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>


    </>
  );
}

export default App;
