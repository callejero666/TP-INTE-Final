import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // implementar para que ingrese luego de confirmar usuario
        navigate('/principal');
    };

    const signInWithGoogle = () => {
        // Implementar la lógica de inicio de sesión de Google aquí
        window.location.href = 'https://accounts.google.com/signin';
    };


    const signInWithFacebook = () => {
        // Implementar la lógica de inicio de sesión de Facebook aquí
        window.location.href = 'https://www.facebook.com/login';
    };

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">INICIAR SESION</button>
                <button type="button" onClick={() => navigate('/registro')}>REGISTRO</button>
                <div className="separador">or sign in with</div>
                <button type="button" onClick={signInWithGoogle} className="btn-google">
                    INICIAR SESION CON GOOGLE
                </button>
                <button type="button" onClick={signInWithFacebook} className="btn-facebook">
                    INICIAR SESION CON FACEBOOK
                </button>
            </form>
        </section>
    );
}
