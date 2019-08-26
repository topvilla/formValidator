import React from 'react';
import Input from './Input';
import * as Validators from './Validators';
import * as mask from './InputMask';

export default class InputCpf extends React.Component{


    render(){
        return <Input 
        type = {"text"}
        validator = {
            [
                Validators.require,
                Validators.textTypeNumber,
                Validators.cpf
            ]
        }
        listen = {this.props.listen}
        messageError = {this.props.messageError}
        value = {this.props.value}
        name = {this.props.name}
        mask = {mask.cpf}
    />
    }
}