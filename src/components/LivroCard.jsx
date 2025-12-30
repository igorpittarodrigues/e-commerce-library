function LivroCard({ titulo,autor,ano,genero,preco,imagem, onAdd }) {
    return (
   <div className={` p-6 rounded-lg shadow-md bg-white`}>
    <h2 className="text-xl font-bold">{titulo}</h2>
    <p className="text-gray-700">Autor: {autor}</p>
    <p className="text-gray-700">Ano: {ano}</p>
    <p className="text-gray-700">Gênero: {genero}</p>
    <img src={imagem} alt={titulo} className="w-[200px] h-[300px] object-cover pt-2" />
    <p className="text-gray-700">Preço: R$ {preco}</p>
    <button onClick={() => onAdd({ titulo, autor, ano, genero, preco, imagem })} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Adicionar ao Carrinho
    </button>
   </div>  

)
}

export default LivroCard;