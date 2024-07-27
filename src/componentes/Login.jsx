import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // implementar para que ingrese luego de confirmar usuario
        
        navigate('/principal');
    };

    return (
        <section>
            <h1>Iniciar Sesión</h1>
            <form className="Login" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">INICIAR SESION</button>
                <button type="button" onClick={() => navigate('/registro')}>REGISTRO</button>
                <button type="button">INICIAR SESION CON GOOGLE</button>
            </form>
        </section>
    );
}

