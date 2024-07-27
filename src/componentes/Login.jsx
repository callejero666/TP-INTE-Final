import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
    const navigate = useNavigate();
    const step = 1; // Ajustar este valor según la lógica de la aplicación

    const handleSubmit = (e) => {
        e.preventDefault();
        // implementar para que ingrese luego de confirmar usuario
        navigate('/principal');
    };

    const signInWithGoogle = () => {
        // Lógica para iniciar sesión con Google
        console.log('Iniciar sesión con Google');
    };

    const signInWithFacebook = () => {
        // Lógica para iniciar sesión con Facebook
        console.log('Iniciar sesión con Facebook');
    };

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">INICIAR SESIÓN</button>
                <button type="button" onClick={() => navigate('/registro')}>REGISTRO</button>
                {step === 1 && (
                    <>
                        <div className="separador">o registra con</div>
                        <button type="button" onClick={signInWithGoogle} className="btn-google">
                            Google
                        </button>
                        <button type="button" onClick={signInWithFacebook} className="btn-facebook">
                            Facebook
                        </button>
                    </>
                )}
            </form>
        </section>
    );
}

