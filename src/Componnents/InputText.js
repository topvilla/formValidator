import React from 'react';
import Input from './Input';

export default class InputText extends React.Component{


    render(){
        return <Input 
            type = {"text"}
            validator = {this.props.validator}
            listen = {this.props.listen}
            messageError = {this.props.messageError}
            value = {this.props.value}
            name = {this.props.name}
        />
    }
}