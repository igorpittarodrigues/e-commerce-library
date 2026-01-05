// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();



  const handleLogin = (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  if (user.email === email && user.senha === senha) {
    localStorage.setItem("auth", "true"); // estado de login
    alert("Login bem-sucedido!");
    navigate("/");
  } else {
    alert("Email ou senha incorretos.");
  }
};



  return (
    <div className=" min-h-[calc(100vh-80px)] flex items-center justify-center ">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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