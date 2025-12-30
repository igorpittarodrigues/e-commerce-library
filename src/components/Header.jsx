
import Carrinho from "./Carrinho";
import { Link } from "react-router-dom";
import Login from "../pages/Login";     

function Header({carrinho}) {

   

    return (

        <header className="bg-slate-800 text-white p-5 flex justify-between">

            <h1 className=" font-bold  " >IGORTEKA</h1>


            <nav className="flex gap-4 mx-10" > 
                <p className="font-bold mr-1">Carrinho</p>
                <Carrinho  carrinho={carrinho}
                
                /> {/* Componente Carrinho exibindo o número de itens no carrinho */}
                
               <Link to="/login" className=" bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                Login   
              </Link>
            </nav>
      
        
        </header>


    )
}
export default Header

//mx-10 faz a margem horizontal dos lados do nav
//flex gap-6 espaçamento entre os itens do nav