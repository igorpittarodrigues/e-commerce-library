
import { AiOutlineShoppingCart } from "react-icons/ai";


function Carrinho({carrinho}) {

 console.log("Quantidade no carrinho:", carrinho.length);

  return (
    <div className="relative mr-10 ">

        <AiOutlineShoppingCart size ={24} />
        {carrinho && carrinho.length > 0 &&(

            <span className=" absolute ml-1 bg-red-500 text-white rounded-full px-2 text-sm">
                {carrinho.length}
                
            </span>

        )}
        

    </div>
      

  );
}

export default Carrinho;


