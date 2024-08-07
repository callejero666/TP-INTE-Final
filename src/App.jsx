import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './componentes/Login';
import { Navbar } from './componentes/Navbar';
import { Principal } from './componentes/Principal';
import { Registro } from './componentes/Registro';
import  Chat  from './componentes/Chat';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
}

export default App;




