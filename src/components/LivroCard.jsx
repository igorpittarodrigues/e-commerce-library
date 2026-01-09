function LivroCard({ titulo,autor,ano,genero,preco,imagem, onAdd }) {


    return (
   <div className="flex flex-col md:flex-row bg-white shadow-md rounded overflow-hidden w-full max-w-2xl h-auto md:h-64">

    <img src={imagem}
     alt={titulo} 
     className="w-1/3 h-full rounded mb-2" />


   <div className=" flex flex-col justify-center w-full md:w-2/3 p-4 ">
    <h3 className="text-xl font-bold">{titulo}</h3>
    <p className="text-gray-700">Autor: {autor}</p>
    <p className="text-gray-700">Ano: {ano}</p>
    <p className="text-gray-700">Gênero: {genero}</p>
    <p className="text-gray-700">Preço: R$ {preco}</p>
    


     <button onClick={() => onAdd({ titulo, autor, ano, genero, preco, imagem })} 
     className="mt-auto  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Adicionar ao Carrinho
    </button>
   </div>
    
    
   

   </div>  

)
}

export default LivroCard;

//onClick={() => onAdd({ titulo, autor, ano, genero, preco, imagem })} 
// serve para passar os dados do livro selecionado para a função onAdd quando o botão é clicado.