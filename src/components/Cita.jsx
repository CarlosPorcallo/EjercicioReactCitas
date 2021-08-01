import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    const {id, mascota, propietario, fecha, hora, sintomas} = cita;
    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>Propietario: <span>{propietario}</span></p>
            <p>Fecha Cita: <span>{fecha}</span></p>
            <p>Hora Cita: <span>{hora}</span></p>
            <p>S&iacute;ntomas: <span>{sintomas}</span></p>
            <button
                type="button"
                className="u-full-width button eliminar"
                onClick={ () => eliminarCita(id)}
            >Eliminar</button>
        </div>
    );
} 

Cita.propTypes = {
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;