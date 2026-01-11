import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome,   setNome] = useState("");

  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

      // Recupera lista de usuários
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se já existe email cadastrado
    const userExistente = usuarios.find((u) => u.email === email);
    if (userExistente) {
      alert("Esse email já está cadastrado.");
      return;
    }

    // Cria novo usuário
    const novoUsuario = { nome, email, senha };
    usuarios.push(novoUsuario);

    // Salva lista atualizada
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
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
            type="text"
            placeholder="Nome"
            className="col-span-2 p-2 border rounded" //col-span-2 faz o input ocupar as duas colunas
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="col-span-2 p-2 border rounded"
            value={email}                               // value={email} seta o valor do input para o estado email
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
/* onChange={(e) => setEmail(e.target.value)} atualiza o estado email 
com o valor digitado no campo de email

onchhange atualiza o estado nome com o valor digitado no campo nome
(e) is the event object representing the change event.



*/
