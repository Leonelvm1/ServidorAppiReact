import React, { useSate } from "react";
import { buscarUsuario } from "../services/serviciosUsuario";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const navigate = useNavigate(); // hook para la redireccion

    const handleLogin = async (e) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!usuario || !contrasena) {
            Swal.fire({
                title: "¡Error!",
                text: "Por favor completa todos los campos.",
                icon: "warning",
                confirmButtonText: "Aceptar",
            });
            return;
        }

        try {
            const usuarios = await buscarUsuario();
            const usuarioEncontrado = usuarios.find(
                (user) =>
                    user.nombres === usuario && user.contrasena === contrasena
            );

            if (usuarioEncontrado) {
                Swal.fire({
                    title: "¡Inicio de sesión exitoso!",
                    text: "Redirigiendo a la página de formularios...",
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }).then(() => {
                    navigate("/forms"); // Redirige a la página de formularios
                });
            } else {
                Swal.fire({
                    title: "¡Error!",
                    text: "Usuario o contraseña incorrectos.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        } catch (error) {
            console.error("Error al buscar usuario:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al iniciar sesión.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label>Usuario</label>
                <input
                    type="text"
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
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
            <button type="submit" className="btn btn-success">
                Iniciar Sesión
            </button>
        </form>
    );
};

export default LoginForm;
