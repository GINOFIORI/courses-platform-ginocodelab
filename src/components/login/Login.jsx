import React, {useState} from 'react'
import { auth } from '../../firebase';
import "./login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // Usuario autenticado con éxito
    } catch (error) {
      console.error("Error de inicio de sesión: ", error);
    }
  };

  return (
    <div className="login-container">
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <input
                type="email"
                placeholder="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    </div>
  );
}

export default Login;
