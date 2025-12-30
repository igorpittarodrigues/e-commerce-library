import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (item) => {
    setCarrinho((prev) => [...prev, item]);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gray-200">
        <Header carrinho={carrinho} />

        <main className="p-8 flex gap-4 justify-center">


          <Routes>
            {/* Página principal com os produtos */}
            <Route
              path="/"
              element={
                [1, 2, 3, 4].map((num) => (
                  <Card
                    key={num}
                    titulo={`Produto ${num}`}
                    descricao={`Descrição do produto ${num}`}
                    cor="bg-purple-400"
                    onAdd={() => adicionarAoCarrinho(`Produto ${num}`)}
                  />
                ))
              }
            />

            {/* Página de Login */}
            <Route path="/login" element={<Login />} />

            {/* Página de Cadastro */}
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>

          
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