import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/registro">Registro</Link>
        </nav>
    );
}
