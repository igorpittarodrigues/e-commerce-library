import { AiFillFacebook } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer(){


    return(
        <footer className=" p-4 bg-gray-800 text-white text-center">
        <p className="">© 2024 IGORTEKA. Todos os direitos reservados.</p>


        <div className="grid grid-cols-1 grid grid-cols-3 text-sm  gap-4 p-4">
            <p className="text-left leading-relaxed ">
                Rua Vila Nelita <br />
                3111 - Bairro Lagoa Seca <br />
                Campina Grande - PB <br />
                CEP: 58410-000 <br />
            </p>


    <div className="text-left">


        < div >
          <AiFillMail size={15} />
          <span>igorteka@gmail.com</span>
        </div>


        <div >
          <AiFillInstagram size={15} />
          <span>@igorteka</span>
        </div>


        <div >
         <AiFillFacebook size={15} />
        <span>IGORTEKA</span>
        </div>


    </div>
        


        <div className="text-left">
                
                <h3 className="font-bold ">Fale conosco</h3>
                <span>Telefone: (83) 99999-9999</span>

        </div>
     


        </div>
    </footer>

    )
}

export default Footer;

//"p-4 space-y-2" adiciona padding ao redor do contêiner e espaçamento vertical entre os itens filhos.
//"flex items-center gap-2" cria um contêiner flexível que alinha os itens no centro verticalmente com um espaço de 2 unidades entre eles.
//"flex justify-between" alinha os itens filhos com espaço igual entre eles, distribuindo-os ao longo do eixo principal.
//relative e absolute são usados para posicionamento de elementos em relação ao seu contêiner pai ou à janela de visualização.
//mx-10 aplica margem horizontal de 10 unidades em ambos os lados do elemento.