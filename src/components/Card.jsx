function Card({ titulo, descricao, cor, onAdd }) {
    return (
   <div className={`p-6 rounded-lg shadow-md ${cor}`}>
    <h2 className="text-xl font-bold">{titulo}</h2>
    <p className="text-gray-700">{descricao}</p>
    <button onClick={onAdd} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Adicionar ao Carrinho
    </button>
   </div>



    )

}

export default Card


//{ titulo, descricao, cor, onAdd } são as props que o componente 
// Card recebe para exibir o título, descrição, cor de fundo e a função de adicionar ao carrinho'  