import React, { useState } from 'react'
import shortid from 'shortid';

export const Formulario = ({resibirCitas}) => {
    const [cita, datosCita] = useState({
        nombre: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    })

    const [error, showError] = useState(false);

    const { nombre, propietario, fecha, hora, sintomas } = cita;

    //LEER DATOS DE LOS INPUTS

    const readDates = e => {
        datosCita({
            ...cita,
            [e.target.name]: e.target.value
        });

    }

    const sendDates = (e) => {
        e.preventDefault();

        //VALIDAR FORMULARIO

        if (nombre.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            showError(true);

            return;
        }

        showError(false);

        //ID

        cita.id = shortid.generate();

        //MANDAR FORMULARIO

        resibirCitas(cita);

        //REINICIAR FORMULARIO

        datosCita({

            nombre: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',

        })


        //INGRESAR ID

    }
    return (
        <>
            <h1>Crear cita</h1>

            {
                error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null
            }

            <form onSubmit={sendDates}>
                <label>Nombre de la Mascota</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ingrese el nombre de la mascota"
                    name="nombre"
                    value={nombre}
                    onChange={readDates}

                />

                <label>Nombre del Propietario</label>
                <input type="text"
                    className="u-full-width"
                    placeholder="ingrese el nombre del pripietario"
                    name="propietario"
                    value={propietario}
                    onChange={readDates}
                />

                <label>Fecha</label>
                <input type="date"
                    className="u-full-width"
                    name="fecha"
                    value={fecha}
                    onChange={readDates}
                />

                <label>Hora</label>
                <input type="time"
                    className="u-full-width"
                    value={hora}
                    name="hora"
                    onChange={readDates}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    value={sintomas}
                    name="sintomas"
                    placeholder="Ingrese sus sintomas"
                    onChange={readDates}

                ></textarea>

                <button type="submit"
                    className="u-full-width button-primary"
                >Enviar</button>
            </form>

        </>
    )
}
