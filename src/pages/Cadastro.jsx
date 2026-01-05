function Cadastro() {


const [email, setEmail] = React.useState("");
const [senha, setSenha] = React.useState("");
const navigate = useNavigate(); 



const handleCadastro = () => {
  localStorage.setItem(
    "user",
    JSON.stringify({ email, senha })
  );

  alert("Cadastro realizado!");
  navigate("/login");
};





  return (
   <div className="min-h-screen bg-gray-200 flex justify-center items-center">

      <div className="max-w-lg w-full bgw-full mb-3 p-2 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Cadastro de Usuário</h2>

        <form onSubmit={handleCadastro}
        className="grid grid-cols-2 gap-x-8 gap-y-6">

            
          <input type="text" placeholder="Nome completo" className="w-full mb-3 p-2 border rounded" />

          <input type="email" placeholder="Email" className="bw-full mb-3 p-2 border rounded" />
          <input type="password" placeholder="Senha" className="w-full mb-3 p-2 border rounded" />
          
          <input type="text" placeholder="CPF" className="w-full mb-3 p-2 border rounded" />


          <input type="text" placeholder="Endereço" className="w-full mb-3 p-2 border rounded" />
          <input type="text" placeholder="Complemento" className="w-full mb-3 p-2 border rounded" />
          <input type="text" placeholder="Cidade" className="w-full mb-3 p-2 border rounded" />
          <input type="text" placeholder="Estado" className="w-full mb-3 p-2 border rounded" />


          <input type="text" placeholder="Número do cartão" className="w-full mb-3 p-2 border rounded" />
          <input type="text" placeholder="Validade (MM/AA)" className="w-full mb-3 p-2 border rounded" />
          <input type="text" placeholder="CVV" className="w-full mb-3 p-2 border rounded" />

          <button  
          className="bg-green-500 text-w-full mb-3 p-2 border rounded hover:bg-green-600"
          type="submit"
          >

          Finalizar Cadastro

          </button>
        </form>

        
      </div>
    </div>
  );
}

export default Cadastro;


//min-h-screen faz a div ocupar a altura total da tela
//bg-gray-200 define a cor de fundo cinza claro
//flex justify-center items-center centraliza o conteúdo tanto horizontalmente quanto verticalmente
//bgw-full mb-3 p-2 border rounded-lg shadow-lg cria um cartão branco com padding, bordas arredondadas e sombra
//grid grid-cols-2 gap-x-8 gap-y-6 cria um grid com 2 colunas e espaçamento entre os itens