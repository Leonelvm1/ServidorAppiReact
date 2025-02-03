import React, { useState } from "react";
import { registrarUsuario } from "../services/serviciosUsuario";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [nombres, setNombres] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [metaAhorro, setMetaAhorro] = useState("");
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const objetoEnvioDatosUsuario = {
            nombres,
            fechaNacimiento,
            ubicacion,
            metaAhorro: parseFloat(metaAhorro),
            contrasena,
        };

        try {
            const respuesta = await registrarUsuario(objetoEnvioDatosUsuario);
            console.log("Usuario registrado:", respuesta);

            Swal.fire({
                title: "¡Éxito!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar",
            }).then(() => {
                navigate("/login"); // Redirige al login después del registro
            });
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar el usuario.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div className="form-group">
                <label>Nombres</label>
                <input
                    type="text"
                    className="form-control"
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Fecha de Nacimiento</label>
                <input
                    type="date"
                    className="form-control"
                    value={fechaNacimiento}
                    onChange={(e) => setFechaNacimiento(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Ubicación</label>
                <input
                    type="text"
                    className="form-control"
                    value={ubicacion}
                    onChange={(e) => setUbicacion(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Meta de Ahorro</label>
                <input
                    type="number"
                    className="form-control"
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
                    className="form-control"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Registrar
            </button>
        </form>
    );
};

export default RegisterForm;