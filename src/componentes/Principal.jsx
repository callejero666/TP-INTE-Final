import './Principal.css';
import { useNavigate } from 'react-router-dom';

export function Principal() {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Bienvenido a la Página Principal</h1>
            <nav>
                <button onClick={() => navigate()}>MUSICA</button>
                <button onClick={() => navigate()}>CHAT</button>
            </nav>
        </section>
    );
}

