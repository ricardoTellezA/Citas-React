import React from 'react'

export const Citas = ({cita,eliminarCita}) => {
    return (
        <div className="cita">
        <p>Nombre: <span>{cita.nombre}</span></p>
        <p>Propietatio: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintomas: <span>{cita.sintomas}</span></p>

        <button 
        onClick={() => eliminarCita(cita.id)}
        className="button eliminar u-full-width">
         Eliminar Citas
        </button>
            
        </div>
    )
}
