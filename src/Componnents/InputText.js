import React from 'react';
import Input from './Input';

const InputText = (props)=>{

        return (<Input 
            type = {"text"}
            validator = {props.validator}
            listen = {props.listen}
            messageError = {props.messageError}
            value = {props.value}
            name = {props.name}
        />)
}
export default InputText;