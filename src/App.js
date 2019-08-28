import React from 'react';
import './App.css';
// import Form from './Componnents/Form';
import FormBuilder from './Componnents/FormBuilder';
import * as Validator from './Componnents/Validators';
function App() {
  return (
    <div className="App">
      <FormBuilder 
      handlerSubmit = {(event)=>{console.log(event)}}
      inputs = {
        [
          {
            label:"id",
            type:"number",
            name:"id",
            value:0,
            validator:[
              Validator.require,
              Validator.max(1000)
            ],
            messageError:"id invalido"
          },
          {
            label:"Name completo",
            type:"text",
            name:"name",
            value:"",
            validator:[
              Validator.require,
              Validator.textWithoutAccent
            ],
            messageError:"Nome invalido",
            placeholder:'Nome completo por favor'
          },
          {
            label:"CPF",
            type:"cpf",
            name:"cpf",
            value:"883.370.670-20",
            validator:[
              Validator.cpf
            ],
            messageError:"Cpf invalido",
            placeholder:'Cpf valido por favor'
          },
          {
            label:"Comentario",
            type:"text",
            name:"coment",
            value:"",
            validator:[
              Validator.require,
              Validator.textWithoutAccent

            ],
            messageError:"comentário invalido",
            placeholder:'informe o commentario'
          },
        ]
      } />
      <button type = "submit">enviar</button>
    </div>
  );
}

export default App;
