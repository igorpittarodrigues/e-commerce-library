
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LivroCard from "./components/LivroCard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import { livros } from "./data/livros";
import CarrinhoPage from "./components/CarrinhoPage";



function App() {
  

  const [carrinho, setCarrinho] = useState(() => {
  const carrinhoSalvo = localStorage.getItem("carrinho");
  return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
});

 


  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
  };
  useEffect(() => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}, [carrinho]);


  

  const removerCarrinho = (id) => {
  setCarrinho((prev) => prev.filter((item) => item.id !== id));
};
useEffect(() => {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}, [carrinho]);


  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-400">
        <Header carrinho={carrinho} />

        <main className="p-8 bg-gray-200 flex-1">



        <Routes>
            {/* Página principal com os produtos */}

            <Route
              path="/"
              element={

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center ">

                 {livros.map((livro) => (
                  <LivroCard
                    key={livro.id}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    ano={livro.ano}
                    genero={livro.genero}
                    preco={livro.preco}
                    imagem={livro.imagem}
                    onAdd={() => 

                    {const isAuth=localStorage.getItem("isAuth");
                      if(isAuth!=="true"){
                        alert("Por favor, faça login para adicionar itens ao carrinho.");
                        return;   //return para sair da função se não estiver autenticado
                      }                      
                             
                      adicionarAoCarrinho(livro)
                    }}    

                  />

                ))}

                </div>

              }
            />

            {/* Página de Login */}
            <Route path="/login" element={<Login />} />

            {/* Página de Cadastro */}
            <Route path="/cadastro" element={<Cadastro />} />

            {/* Rota para o carrinho */}
            <Route path="/carrinho" element={
             localStorage.getItem("auth")=== true ? (<CarrinhoPage carrinho={carrinho}  removerCarrinho={removerCarrinho} />)
             :(<Login/>)
              
              } 
              />

        </Routes>




         
          
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
/* carrinho é o estado que armazena os itens do carrinho, 
  setCarrinho é a função para atualizar esse estado,
  useState([]) inicializa o carrinho como um array vazio

(prev) => prev.filter((item) => item.id !== id)
  é uma função que remove um item do carrinho com base no seu id,

(item) => { setCarrinho((prev) => [...prev, item]); } é uma função que adiciona um novo item ao carrinho,
  prev representa o estado anterior do carrinho,
  [...prev, item] cria um novo array que inclui todos os itens anteriores mais o novo item.

  useEffect( () => {} ) serve para executar efeitos colaterais em componentes funcionais do React.
  Ele aceita dois argumentos: uma função de efeito e uma lista de dependências.

  localStorage.setItem("carrinho", JSON.stringify(carrinho)); 
  isso converte o estado carrinho em uma string JSON e o armazena no localStorage do navegador com a chave "carrinho".

  [carrinho] é a lista de dependências para o useEffect. 
  Isso significa que o efeito será executado sempre que o estado carrinho mudar.
)

layout flexível, espaçamento entre os itens e centralização dos itens.


router para gerenciar a navegação entre diferentes páginas do aplicativo.
routes para definir as diferentes rotas do aplicativo.

*/  