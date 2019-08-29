/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import InputBuilder from './InputBuilder';


const FormBuilder = (props)=>{
    
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
       if(input.type !== 'select'){
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
            return (contInputValid === lengthValidator);
        }
       }
       return false;
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
        setForm({
            valid: (contInputsValid === lengthInputs) 
        });
    }  
    useEffect(()=>{
    
        const response = buiderFormAndResponse();
        props.subiscribe(response);
    },[form.valid,...inputsForm.map((input)=>{
        return input.state;
    })]);
    const buiderFormAndResponse = () =>{
        const data = buildFormData();
        return buildResponse(data);
    }
    const buildFormData = ()=>{
        let object = {};
        inputsForm.forEach((input)=>{
            object[input.name] = input.state.value;
        });
        return object;
    }
    const buildResponse = (data)=>{
        const response = {
            valid:form.valid,
            value:data
        }
        return response;
    }

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
export default FormBuilder;