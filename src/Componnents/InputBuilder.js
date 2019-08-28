import React from 'react';
import InputNumber from './InputNumber';
import InputText from './InputText';
import InputDate from './InputDate';
import InputCpf from './InputCpf';


const InputBuilder = (props)=>{

    const checkTypeAndBuilder = (props)=>{
        if(props.inputs !== undefined){
            return props.inputs.map((input,index)=>{
                return checktypeAndConstruct(input);
            })
        }
    }
    const checktypeAndConstruct = (input)=>{
        console.log(input);
        switch (input.type) {
            case 'number':
                return <div>
                    <label>{input.label}</label>
                    <InputNumber name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>

            case 'text':
                return <div>
                    <label>{input.label}</label>
                    <InputText name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>
            case 'date':
                return <div>
                    <label>{input.label}</label>
                    <InputDate name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
                    />
                </div>
            case 'cpf':
                return <div>
                    <label>{input.label}</label>
                    <InputCpf name = {input.name} validator = {input.validator} listen = {input.handler}
                    value = {input.value} messageError = {input.messageError} placeholder={input.placeholder}
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