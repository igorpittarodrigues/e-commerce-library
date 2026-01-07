import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosRemoveCircleOutline } from "react-icons/io";

const CarrinhoPage=({carrinho, removerCarrinho}) =>{

return(

    <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Seu Carrinho</h1>

        {carrinho.lenght === 0 ? (

            <div className='text-center p-8 bg-white rounded shadow'>
                <p>O carrinho está vazio </p>

                <Link to='/' className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
                Continue Comprando 
                </Link>
            </div>

        ) : (
            <div className='  bg-white p-6 rounded shadow'>
                {carrinho.map((item,index) =>(

                    <div key={index} className='flex justify-between items-center border-b py-2'>


                        <div className='flex items-center'>
                            <img src={item.imagem} alt={item.titulo} className='w-16 h-24 object-cover mr-4' />
                        </div>


                        <div>
                            <h3 className='font-semibold'>{item.titulo}</h3>
                            <p className='text-sm text-gray-500'>{item.autor}</p>
                        </div>


                        <div className='flex items-center gap-4 ml-2'> 
                            <span className='font-bold'>{item.preco.toFixed(2)}</span>
                        
                            <button onClick={() => removerCarrinho(item.id)} 
                            className='bg-white text-gray-500 px-3 py-1  hover:bg-gray-200 rounded-full'>
                                <IoIosRemoveCircleOutline />
                            </button>

                         </div>
                        

                    </div>
              ) ) }

              <div className=' text-right font-bold text-xl'>
                Total : R$ {carrinho.reduce((total,item) => total + item.preco,0).toFixed(2)}
              </div>
            






            </div>

        )}

    </div>
)}

export default CarrinhoPage;