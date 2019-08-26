import React from 'react';
import Input from './Input';

class InputNumber extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    render(){
        return <Input 
        type = {"number"}
        validator = {this.props.validator}
        listen = {this.props.listen}
        messageError = {this.props.messageError}
        value = {this.props.value}
        name = {this.props.name}
        />
    }
}
export default InputNumber;