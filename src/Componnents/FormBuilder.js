/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import InputBuilder from './InputBuilder';


const formBuilder = (props)=>{
    
    let inputsForm = [];
    const [form,setForm] = useState({
        valid:false
    });
    
    const configInputs = (props)=>{
        if(props.inputs !== undefined){
            return props.inputs.map(input => {
                input.handler = (value,isValid)=>{
                    input.setState({value:value,valid:isValid});
                }
                [input.state,input.setState] = useState({
                    value:input.value,
                    valid:preValidator(input)
                });
                return input;
            });
        }
    }
    
    const preValidator = (input)=>{
        const lengthValidator = input.validator.length;
        let contInputValid = 0;
        if(input.validator !== undefined){
            input.validator.every((validate)=>{
                if(validate(input.value)){
                    ++contInputValid;
                    return true;
                }
                return false;
            });
            if(contInputValid === lengthValidator){
                return true;
            }
            return false;
        }
    }
    inputsForm = configInputs(props);
    useEffect(()=>{
        fomrIsValid();
    },inputsForm.map((input)=>{
        return input.state;
    }));
    const fomrIsValid = ()=>{
        const lengthInputs = inputsForm.length;
        let contInputsValid = 0;
        inputsForm.every((input)=>{
            if(input.state.valid){
                ++contInputsValid;
                return true;
            }
            return false;
        });
        if(contInputsValid === lengthInputs){
            setForm({
                valid:true 
            })
        }else{
            setForm({
                valid:false 
            })
        }
    }
    useEffect(()=>{
        props.subiscribe(form);
    },[form.valid])

    return(
        <div>
            <h1>Form Builder</h1>
            <div>
                {
                    form.valid && <p>Formulario valido</p>
                }
            </div>
            <form>
                <InputBuilder inputs = {inputsForm} />
            </form>
            

        </div>
    );
}
export default formBuilder;