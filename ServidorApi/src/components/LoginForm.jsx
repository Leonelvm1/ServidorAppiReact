import React, { useState } from "react";

const LoginForm = ({ onLogin }) => {
    const [usuario, setUsuario] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!usuario || !contrasena) {
            alert("Por favor completa todos los campos."); // Puedes reemplazar esto con Swal.fire si lo prefieres
            return;
        }

        // Llamar a la función onLogin pasada desde el padre
        onLogin({ usuario, contrasena });
    };

    return (
        <div className="form-container">
            <h2 className="text-center">Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Usuario</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
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
                <button type="submit" className="btn btn-success">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginForm;