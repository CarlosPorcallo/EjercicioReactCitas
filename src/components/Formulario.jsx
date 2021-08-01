import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        });
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e => {
        e.preventDefault();

        actualizarError(false);

        // verificar que los campos no vengan vacios
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        } else {
            cita.id = uuid();

            crearCita(cita);
    
            actualizarCita({
                id: '',
                mascota: '',
                propietario: '',
                fecha: '',
                hora: '',
                sintomas: ''
            });
        }
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos del formulario son obligatorios.</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota:</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Escribe el nombre de tu mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre Propietario:</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Escribe el nombre del propietario"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha:</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora:</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                >
                </textarea>
                <button
                    className="u-full-width button-primary"
                    type="submit"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}
 
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;