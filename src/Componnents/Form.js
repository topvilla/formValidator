import React from 'react';
import * as Validators from './Validators';
import InputNumber from './InputNumber';
import InputText from './InputText';
import InputCpf from './InputCpf';


export default class Form extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super();
        this.listenId = this.listenId.bind(this);
        this.listenName = this.listenName.bind(this);
        this.listenCpf = this.listenCpf.bind(this);

        this.state = {
            id:{
                value:0,
                valid:false
            }
        }
    }
    componentDidUpdate(){
        console.log(this.state);
    }
    listenId(valor,isValid){
        console.log(valor);
        console.log(isValid);
    }
    listenName(valor,isValid){
        console.log(valor);
        console.log(isValid);
    }
    listenCpf(valor,isValid){
        console.log(valor);
        console.log(isValid);
    }
    render(){
        return <form>
            <label>ID</label>
            <InputNumber 
                 name = "id" 
                 validator = {
                    [
                      Validators.require,
                      Validators.max(1000),
                      Validators.min(0)
                    ]
                  }
                  listen = {this.listenId}
                  value = {1}
                  messageError = "Error id person invalid"
            />
            <label>Name</label>
            <InputText
                validator = {
                    [
                      Validators.require,
                      Validators.textWithoutAccent,
                      Validators.maxLenght(10)
                    ]
                  }
                listen = {this.listenName}
                value = {""}
                messageError = {"Nome invalido"}
            />
            <label>Cpf</label>
            <InputCpf
                listen = { this.listenCpf}
                value = {""}
                messageError = "Cpf invalido"
            />


        </form>
    }
}