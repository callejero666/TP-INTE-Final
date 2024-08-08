/*import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

function Login() {
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (!isLoading) {
            setIsLoading(true);
            setIsError(false);
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}api-auth/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: usernameRef.current.value,
                        password: passwordRef.current.value,
                    }),
                });

                if (!response.ok) {
                    throw new Error("No se pudo iniciar sesión");
                }

                const responseData = await response.json();
                login(responseData.token);
                navigate("/principal");
            } catch (error) {
                console.error("Error al iniciar sesión", error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
    }

    const signInWithGoogle = () => {
        window.location.href = 'https://accounts.google.com/signin';
    };

    const signInWithFacebook = () => {
        window.location.href = 'https://www.facebook.com/login';
    };

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        ref={usernameRef}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={passwordRef}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </button>
                {isError && <p className="error-message">Error al iniciar sesión. Inténtalo de nuevo.</p>}
            </form>
            <div className="social-login">
                <button onClick={signInWithGoogle} className="google-btn">Iniciar sesión con Google</button>
                <button onClick={signInWithFacebook} className="facebook-btn">Iniciar sesión con Facebook</button>
            </div>
        </section>
    );
}

export default Login;*/



/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import "./Login.css";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [{ data, isError, isLoading }, doFetch] = useFetch(
        "api-auth/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }
    );

    const { actions } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        doFetch();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    }


    React.useEffect(() => {
        if (data && !isError) {
            localStorage.setItem('token', data.token);
            actions.login(data);
            navigate("/principal");
        }
    }, [data, isError, actions, navigate]);

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </button>
                {isError && <p className="error-message">Error al iniciar sesión. Inténtalo de nuevo.</p>}
            </form>
        </section>
    );
}

export default Login;

ESTE ESTABA USANDO EL DE ARRIBA*/


/*import React from "react";
import "./Login.css";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [{ data, isError, isLoading }, doFetch] = useFetch(
        "/api-auth/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }
    );

    const { actions } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        doFetch();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    }

    React.useEffect(() => {
        if (data && !isError) {
            localStorage.setItem('token', data.token);
            actions.login(data);
            navigate("/principal");
        } else if (isError) {
            setError("Error al iniciar sesión. Inténtalo de nuevo.");
        }
    }, [data, isError, actions, navigate]);

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                        autocomplete="username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </section>
    );
}

export default Login;*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import "./Login.css";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [{ data, isError, isLoading }, doFetch] = useFetch(
        "api-auth/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }
    );

    const { actions } = useAuth();
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        doFetch();
    }

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === "username") setUsername(value);
        if (name === "password") setPassword(value);
    }

    React.useEffect(() => {
        if (data && !isError) {
            localStorage.setItem('token', data.token);
            actions.login(data);
            navigate("/principal");
        } else if (isError) {
            setError("Error al iniciar sesión. Inténtalo de nuevo.");
        }
    }, [data, isError, actions, navigate]);

    return (
        <section className="login-section">
            <h1>Iniciar Sesión</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Iniciar Sesión"}
                </button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </section>
    );
}

export default Login;