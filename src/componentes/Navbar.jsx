/*import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/registro">Registro</Link>
            <Link to="/Musica">Musica</Link>
            <Link to="/Chat">Chat</Link>
            <Link to="/perfil">Perfil</Link>
        </nav>
    );
}*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

export function Navbar() {
    const { state, actions } = useAuth();

    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            {state.isAuthenticated ? (
                <>
                    <Link to="/Musica">Musica</Link>
                    <Link to="/Chat">Chat</Link>
                    <Link to="/perfil">Perfil</Link>
                    
                </>
            ) : (
                <>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/registro">Registro</Link>
                </>
            )}
        </nav>
    );
}
