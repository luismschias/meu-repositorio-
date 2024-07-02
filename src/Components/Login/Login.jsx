import {FaUser, FaLock} from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

  const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = (event) => {
    event.preventDefault();


    console.log(username, password);
    console.log("Envio");
   }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div class="input-field">
            <input type="email" placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon"/>
            </div>
            <div class="input-field">
            <input type="password" placeholder="Your Password" onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"/>
            </div>

            <div className="recall-forget">
              <label>
                <input type="checkbox"/>
                Lembre de mim
              </label>
            </div>
            
            <button>Entrar</button>
        </form>
    </div>
  );
};

export default Login;