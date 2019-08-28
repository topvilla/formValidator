import React from 'react';
import Input from './Input';
import * as Validators from './Validators';
import * as mask from './InputMask';

const InputCpf = (props)=>{
        return (<Input 
        type = {"text"}
        validator = {
            [
                Validators.require,
                Validators.textTypeNumber,
                Validators.cpf
            ]
        }
        listen = {props.listen}
        messageError = {props.messageError}
        value = {props.value}
        name = {props.name}
        mask = {mask.cpf}
        placeholder = {props.placeholder}

    />)
}
export default InputCpf;