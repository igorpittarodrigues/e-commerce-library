import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [formData,setFormData]= useState(
    { 
      nome:"",
      email:"",
      senha:"",

      endereco:{
        rua:"",
        complemento:"",
        cidade:"",
        estado:""
      }

    }  /*formData é um objeto que contém todos os campos do formulário 
         e seus valores iniciais são strings vazias.

        setFormData é a função usada para atualizar o estado formData.
       */ 
  );



  const navigate = useNavigate();


  const handleChange = (e) => {
    const {name,value}= e.target;  


    if(name in formData.endereco){

      setFormData({
        ...formData,
        endereco:{
          ...formData.endereco,
          [name]:value
        }
      })


    } else{

      setFormData({
        ...formData,
        [name]:value
      })

    }};




  const handleSubmit = (e) =>{
    e.preventDefault();

    localStorage.setItem("user",JSON.stringify(formData));

    alert("Cadastro realizado com sucesso!");
    navigate("/login");

  }





  
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-lg w-full bg-white p-6 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastro de Usuário
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-8 gap-y-6"
        >

          <input
            type="text"
            placeholder="Nome completo"
            className="col-span-2 p-2 border rounded" //col-span-2 faz o input ocupar as duas colunas
            value={formData.nome}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="col-span-2 p-2 border rounded"
            value={formData.email}                               // value={email} seta o valor do input para o estado email
            onChange={handleChange}  
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="col-span-2 p-2 border rounded"
            value={formData.senha}
            onChange={handleChange}
            required
          />

          <input
            type="rua"
            placeholder="Rua"
            className="col-span-2 p-2 border rounded"
            value={formData.endereco.rua}
            onChange={handleChange}
   
          />

          <input
            type="complemento"
            placeholder="Complemento"
            className="col-span-2 p-2 border rounded"
            value={formData.endereco.complemento}
            onChange={handleChange}
          />

          <input
            type="cidade"
            placeholder="Cidade"
            className="col-span-2 p-2 border rounded"
            value={formData.endereco.cidade}
            onChange={handleChange}
          />

          <input
            type="estado"
            placeholder="Estado"
            className="col-span-2 p-2 border rounded"
            value={formData.endereco.estado}
            onChange={handleChange}
          />

          <button
            type="submit"       
            className="col-span-2 bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Finalizar Cadastro
          </button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
/* onChange={(e) => setEmail(e.t arget.value)} atualiza o estado email 
com o valor digitado no campo de email

onchhange atualiza o estado nome com o valor digitado no campo nome
(e) is the event object representing the change event.

 type="submit" é para 


*/
