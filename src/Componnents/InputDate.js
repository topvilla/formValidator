import React from 'react';
import Input from './Input';
import * as validator from './Validators';


const  InputDate = (props)=>{
    return(
        <Input
        type = {"date"}
        validator = {[
            validator.require
        ]}
        listen = {props.listen}
        messageError = {props.messageError}
        value = {props.value}
        name = {props.name}
        placeholder = {props.placeholder}

        />
    )
}
export default InputDate;