import React from 'react';
import './App.css';
// import Form from './Componnents/Form';
import FormBuilder from './Componnents/FormBuilder';
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
              ()=>{
                return true;
              }
            ],
            messageError:"id invalido"
          },
          {
            label:"Name completo",
            type:"text",
            name:"name",
            value:"",
            validator:[
              ()=>{
                return true;
              }
            ],
            messageError:"Nome invalido",
            placeholder:'Nome completo por favor'
          }
        ]
      } />
      <button type = "submit">enviar</button>
    </div>
  );
}

export default App;
