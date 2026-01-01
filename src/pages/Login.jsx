// src/pages/Login.jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tentando login com:", { email, senha });
    // Aqui você pode validar ou conectar com backend/Firebase
  };

  return (
    <div className=" bg-gray-100 flex justify-center ">
      <div className="bg-white p-10 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2 rounded"
          />

          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Entrar
          </button>


          <div className="text-center mt-2">
             <p >Não é cadastrado? <br />
             <a href="/cadastro" className="text-blue-500 hover:underline">Cadastre-se</a>
             </p>
          </div>
         
        </form>
      </div>
    </div>
  );
}

export default Login;