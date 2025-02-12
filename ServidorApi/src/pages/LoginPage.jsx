import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import { buscarUsuario } from "../services/serviciosUsuario"; // Importar la función
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [mostrarFormulario, setMostrarFormulario] = useState(true); // Estado para mostrar/ocultar el formulario
    const [cargando, setCargando] = useState(false); // Estado para manejar el estado de carga

    const handleLogin = async (credenciales) => {
        const { usuario, contrasena } = credenciales;

        setCargando(true); // Activar el estado de carga
        setMostrarFormulario(false); // Ocultar el formulario mientras se procesa

        try {
            // Buscar el usuario en la base de datos
            const usuarios = await buscarUsuario(); // Usar la función
            console.log("Usuarios obtenidos:", usuarios); // Verifica los usuarios

            const usuarioEncontrado = usuarios.find(
                (user) =>
                    user.nombres === usuario && user.contrasena === contrasena
            );
            console.log("Usuario encontrado:", usuarioEncontrado); // Verifica el usuario encontrado

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
                setMostrarFormulario(true); // Mostrar el formulario nuevamente
                Swal.fire({
                    title: "¡Error!",
                    text: "Usuario o contraseña incorrectos.",
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        } catch (error) {
            console.error("Error al buscar usuario:", error);
            setMostrarFormulario(true); // Mostrar el formulario nuevamente
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al iniciar sesión.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        } finally {
            setCargando(false); // Desactivar el estado de carga
        }
    };

    return (
        <div>
            <h1>Iniciar Sesión</h1>

            {/* Mostrar el formulario solo si mostrarFormulario es true */}
            {mostrarFormulario && <LoginForm onLogin={handleLogin} />}

            {/* Mostrar un mensaje de carga si cargando es true */}
            {cargando && <p>Cargando...</p>}
        </div>
    );
}

export default LoginPage;