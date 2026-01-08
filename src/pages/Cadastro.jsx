import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "user",
      JSON.stringify({ email, senha })
    );

    
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastro de Usuário
        </h2>

        <form
          onSubmit={handleCadastro}
          className="grid grid-cols-2 gap-x-8 gap-y-6"
        >
          <input
            type="email"
            placeholder="Email"
            className="col-span-2 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="col-span-2 p-2 border rounded"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button
            type="submit"
            className="col-span-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Finalizar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
