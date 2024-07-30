import { useNavigate } from 'react-router-dom';
import './Registro.css';

export function Registro() {
    const navigate = useNavigate();

    const handleRegistro = async (e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        try {
            const response = await fetch("https://sandbox.academiadevelopers.com/api-auth/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                console.error('Error en el registro:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    return (
        <section className="registro-section">
            <h1>Registro</h1>
            <form className="registro-form" onSubmit={handleRegistro}>
                <input type="text" name="username" placeholder="Username" />
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">REGISTRARSE</button>
            </form>
        </section>
    );
}
