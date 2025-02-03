import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import FormsPage from "./pages/FormsPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forms" element={<FormsPage />} />
                <Route path="/" element={<LoginPage />} /> {/* Ruta por defecto */}
            </Routes>
        </Router>
    );
};

export default App;
