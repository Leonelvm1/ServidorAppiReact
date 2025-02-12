import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./styles.css"; // Importa los estilos personalizados

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirige la ruta raíz ("/") a "/login" */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Ruta para el LoginPage */}
                <Route path="/login" element={<LoginPage />} />

                {/* Ruta para el RegisterPage */}
                <Route path="/register" element={<RegisterPage />} />

                {/* Otras rutas (si las tienes) */}
            </Routes>
        </Router>
    );
}

export default App;