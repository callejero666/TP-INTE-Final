import { useState } from 'react';
import './Perfil.css';

export function Perfil() {
  const [user, setUser] = useState({
    username: 'Usuario',
    email: 'usuario@example.com',
  });

  return (
    <section className="perfil-section">
      <h1>Perfil de Usuario</h1>
      <div className="perfil-info">
        <div className="perfil-item">
          <strong>Nombre de Usuario:</strong>
          <span>{user.username}</span>
        </div>
        <div className="perfil-item">
          <strong>Correo Electrónico:</strong>
          <span>{user.email}</span>
        </div>
      </div>
      <div className="perfil-actions">
        <button onClick={() => alert('Editando perfil')}>Editar Perfil</button>
        <button onClick={() => alert('Cerrar sesión')}>Cerrar Sesión</button>
      </div>
    </section>
  );
}
