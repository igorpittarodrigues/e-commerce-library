// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();



  const handleLogin = (e) => {
  e.preventDefault();

  
   // Recupera lista de usuários
    const user = JSON.parse(localStorage.getItem("user"))

    if (!user){
      alert("Usuário não cadastrado ")
      return ;
    }

   if (user.email === email && user.senha === senha){
    
    localStorage.setItem("auth","true") // auth e true são usados para indicar que o usuário está logado.
    alert("Login realizado com sucesso ")
    navigate("/")

   } else{

    alert("Email ou senha incorretos ")

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
            onChange={(e) => setEmail(e.target.value)} //atualiza o estado email com o valor digitado no campo de email
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

/* const handleLogin = (e) => {e.preventDefault();  }
isso previne o comportamento padrão do formulário, que é recarregar a página ao ser submetido.

  const user = JSON.parse(localStorage.getItem("user"));
Aqui, estamos tentando recuperar os dados do usuário armazenados no localStorage. 
Se não houver nenhum usuário cadastrado, user será null.

  localStorage.setItem("auth", "true"); auth e true são usados para indicar que o usuário está logado.

   onSubmit={handleLogin} serve para associar a função handleLogin ao evento de submissão do formulário.
   submissão do formulário é o ato de enviar os dados do formulário para processamento.

   onChange={} serve para associar uma função ao evento de mudança de valor em um campo de entrada (input).


   onChange={(e) => setSenha(e.target.value)} atualiza o estado senha 
   com o valor digitado no campo de senha sempre que ele muda.

   (e) esse parâmetro representa o evento que ocorreu, neste caso, a mudança no campo de entrada (input).

   onSubmit é um evento que é disparado quando o formulário é submetido, 
   ou seja, quando o usuário clica no botão de enviar ou pressiona Enter dentro de um campo de entrada.

   type= onSubmit indica que o botão é do tipo "submit",
   o que significa que ele irá disparar o evento de submissão do formulário quando clicado.
 */