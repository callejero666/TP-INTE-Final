/*import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Perfil.css';

export function Perfil() {
    const { state } = useAuth();

    return (
        <div className="perfil-container">
            <h1>Perfil de Usuario</h1>
            <div className="perfil-info">
                <img src={state.profilePicture || 'ruta/a/imagen/por-defecto.jpg'} alt="Foto de perfil" className="perfil-foto" />
                <p><strong>Nombre de usuario:</strong> {state.username}</p>
                <p><strong>Correo electrónico:</strong> {state.email}</p>
                <p><strong>Nombre completo:</strong> {state.fullName}</p>
                <p><strong>Fecha de registro:</strong> {state.registrationDate}</p>
                <p><strong>Género musical favorito:</strong> {state.favoriteGenre}</p>
                <p><strong>Cantidad de playlists:</strong> {state.playlistCount}</p>
            </div>
        </div>
    );
}*/


import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import './Perfil.css';

export function Perfil() {
    const { state } = useAuth();

    return (
        <div className="perfil-container">
            <h1>Perfil de Usuario</h1>
            <div className="perfil-info">
                <img src={state.profilePicture || 'ruta/a/imagen/por-defecto.jpg'} alt="Foto de perfil" className="perfil-foto" />
                <p><strong>Nombre de usuario:</strong> {state.username}</p>
                <p><strong>Correo electrónico:</strong> {state.email}</p>
                <p><strong>Nombre completo:</strong> {state.fullName}</p>
                <p><strong>Fecha de registro:</strong> {state.registrationDate}</p>
                <p><strong>Género musical favorito:</strong> {state.favoriteGenre}</p>
                <p><strong>Cantidad de playlists:</strong> {state.playlistCount}</p>
            </div>
        </div>
    );
}








