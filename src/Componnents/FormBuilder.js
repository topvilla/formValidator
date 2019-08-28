import React,{useState,useEffect} from 'react';
import InputBuilder from './InputBuilder';


const formBuilder = (props)=>{
    
    let inputsForm = [];
    const configInputs = (props)=>{
        if(props.inputs !== undefined){
            return props.inputs.map(input => {
                input.handler = (value,isValid)=>{
                    console.log('funcão que manipula meu input');
                }
                [input.state,input.setState] = useState({
                    value:input.value,
                    valid:false
                });
                return input;
            });
        }
    }
    inputsForm = configInputs(props);
    console.log(inputsForm);
    return(
        <div>
            <h1>Form Builder</h1>
            <form onSubmit = {
                ()=>{
                    alert('dds');
                }
            }>
                <InputBuilder inputs = {inputsForm} />
            </form>
            

        </div>
    );
}
export default formBuilder;