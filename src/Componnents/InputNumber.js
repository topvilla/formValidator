import React from 'react';
import Input from './Input';

const  InputNumber =(props)=>{
  
        return (<Input 
        type = {"number"}
        validator = {props.validator}
        listen = {props.listen}
        messageError = {props.messageError}
        value = {props.value}
        name = {props.name}
        />);
    
}
export default InputNumber;