import React, { useState } from "react";

const RegisterForm = ({ onRegister }) => {
    const [nombres, setNombres] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [metaAhorro, setMetaAhorro] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!nombres || !fechaNacimiento || !ubicacion || !metaAhorro || !contrasena) {
            alert("Por favor completa todos los campos."); // Puedes reemplazar esto con Swal.fire si lo prefieres
            return;
        }

        // Crear el objeto con los datos del formulario
        const datosUsuario = {
            nombres,
            fechaNacimiento,
            ubicacion,
            metaAhorro: parseFloat(metaAhorro),
            contrasena,
        };

        // Llamar a la función onRegister pasada desde el padre
        onRegister(datosUsuario);
    };

    return (
        <div className="form-container">
            <h2 className="text-center">Registro de Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombres</label>
                    <input
                        type="text"
                        value={nombres}
                        onChange={(e) => setNombres(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Fecha de Nacimiento</label>
                    <input
                        type="date"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ubicación</label>
                    <input
                        type="text"
                        value={ubicacion}
                        onChange={(e) => setUbicacion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Meta de Ahorro</label>
                    <input
                        type="number"
                        value={metaAhorro}
                        onChange={(e) => setMetaAhorro(e.target.value)}
                        step="0.01"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;