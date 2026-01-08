
import Carrinho from "./Carrinho";
import { Link } from "react-router-dom";
import Login from "../pages/Login";       
import { useNavigate } from "react-router-dom";



function Header({carrinho}) {

   const navigate = useNavigate();

   const isAuth= localStorage.getItem("auth")==="true";
    const user = JSON.parse(localStorage.getItem("user"));

   const handleLogout = () =>{
    localStorage.removeItem("auth");
    navigate("/login");

   }

    return (

        <header className="bg-slate-800 text-white p-5 flex justify-between">
            
            <Link to="/"><h1 className=" font-bold  " >IGORTEKA</h1></Link>
          

            <nav className="flex gap-4 mx-10" > 


               <Link to="/carrinho">   
                 <p className="font-bold mr-1">Carrinho</p> 
                 <Carrinho  carrinho={carrinho}/> 
                </Link>

                
              {isAuth ? (
                <>
                
                <span className="text-sm text-gray-200">
                  Olá,{user?.email}
                </span>
                
                
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">

                  Logout

                </button>
                
                </>

              ) :(


              <Link to="/login" className=" bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Login   
              </Link>

                
              )}

            </nav>
      
        </header>


    )
}
export default Header

/*mx-10 faz a margem horizontal dos lados do nav


justify-between serve para separar os itens o máximo possível, 
colocando o primeiro item à esquerda e o último à direita


<></> fragmento vazio usado para agrupar múltiplos elementos sem adicionar um nó extra ao DOM

const isAuth = localStorage.getItem("auth") === "true";
verifica se o usuário está autenticado ao checar o valor armazenado em localStorage
 

{isAuth ? ( ... ) : ( ... )}
renderiza condicionalmente diferentes elementos de navegação com base no estado de autenticação do usuário.

{user?.email} essa sintaxe usa o operador de encadeamento opcional (?.)
 para acessar a propriedade email do objeto user. 

*/