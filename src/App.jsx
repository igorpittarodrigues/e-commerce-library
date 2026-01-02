
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
      <div className="min-h-screen flex flex-col justify-between bg-gray-200">
        <Header carrinho={carrinho} />

        <main className="p-8 bg-gray-200">

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">

 <Routes>
            {/* Página principal com os produtos */}
            <Route
              path="/"
              element={
                livros.map((livro) => (
                  <LivroCard
                    key={livro.id}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    ano={livro.ano}
                    genero={livro.genero}
                    preco={livro.preco}
                    imagem={livro.imagem}
                    onAdd={() => adicionarAoCarrinho(livro)}
                    
                  />
                ))
              }
            />

            {/* Página de Login */}
            <Route path="/login" element={<Login />} />

            {/* Página de Cadastro */}
            <Route path="/cadastro" element={<Cadastro />} />

            {/* Rota para o carrinho */}
            <Route path="/carrinho" element={<CarrinhoPage carrinho={carrinho}  removerCarrinho={removerCarrinho} />} />
          </Routes>



</div>
         
          
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
// carrinho é o estado que armazena os itens do carrinho, 
//  setCarrinho é a função para atualizar esse estado,
//  useState([]) inicializa o carrinho como um array vazio


//(item) => { setCarrinho((prev) => [...prev, item]); } é uma função que adiciona um novo item ao carrinho,
//  prev representa o estado anterior do carrinho,
//  [...prev, item] cria um novo array que inclui todos os itens anteriores mais o novo item.

//[1,2,3,4].map((num) =>( é usado para renderizar quatro componentes Card dinamicamente,
//  num é o número atual do array que está sendo mapeado,
//  Cada Card recebe props como titulo, descricao, cor e onAdd para adicionar o item ao carrinho.


//p-8 flex gap-4 justify-center estiliza o main com padding,
//  layout flexível, espaçamento entre os itens e centralização dos itens.