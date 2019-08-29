import React from 'react';
import InputNumber from './InputNumber';
import InputText from './InputText';
import InputDate from './InputDate';
import InputCpf from './InputCpf';
import Select from './Select';


const InputBuilder = (props)=>{

    const checkTypeAndBuilder = (props)=>{
        if(props.inputs !== undefined){
            return props.inputs.map((input,index)=>{
                return checktypeAndConstruct(input);
            })
        }
    }
    const checktypeAndConstruct = (input)=>{
        switch (input.type) {
            case 'number':
                return <div key = {input.name}>
                    <label>{input.label}</label>
                    <InputNumber name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>

            case 'text':
                return <div key = {input.name} >
                    <label>{input.label}</label>
                    <InputText name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>
            case 'date':
                return <div key = {input.name} >
                    <label>{input.label}</label>
                    <InputDate name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>
            case 'cpf':
                return <div key = {input.name}>
                    <label>{input.label}</label>
                    <InputCpf name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>
            case 'select':
                
                return <div key = {input.name}>
                    <label>{input.label}</label>
                    <Select 
                        name = {input.name}
                        mapElement = {input.elementsMap.map((element)=>{
                            return <option  key = {element.value } 
                            value = {element.value}>{element.type}</option>
                        })}
                        value = {input.value}
                        listen = {input.handler}
                    />
                    
                </div>
            default:
                break;
        }
    }
    return(
        <>
            {checkTypeAndBuilder(props)}
        </>
    );
}   
export default InputBuilder;