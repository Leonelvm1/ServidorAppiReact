import React from "react";
import RegisterForm from "../components/RegisterForm";
import { registrarUsuario } from "../services/serviciosUsuario"; // Importar la función
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();

    const handleRegister = async (datosUsuario) => {
        try {
            // Registrar el usuario en la base de datos
            const respuesta = await registrarUsuario(datosUsuario); // Usar la función
            console.log("Usuario registrado:", respuesta);

            // Mostrar alerta de éxito
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
            // Mostrar alerta de error
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar el usuario.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <div>
            <h1>Registro de Usuario</h1>
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
}

export default RegisterPage;