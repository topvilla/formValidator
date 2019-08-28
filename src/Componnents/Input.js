import React from 'react';


export default class Input extends React.Component{


    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            value:props.value !== undefined?this.props.value:"",
            touch:false,
            isValid:true
        }
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerOnFocus = this.handlerOnFocus.bind(this);
        this.handlerBlur = this.handlerBlur.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

    }
    isValid(value){
        if(this.props.validator !== undefined){
            this.props.validator.every((validator)=>{
                if(validator(value)){
                    this.updateValueState(value);
                    this.props.listen(value,true);
                    return true;
                }else{
                   this.updateValueStateWithError(value);
                   this.props.listen(value,false);
                   return false;
                }   
            });
        }
    }
    handlerChange(event){
        const value = event.target.value;
        this.isValid(value,event);
    }
    updateValueState(value){
        this.setState({
            ...this.state,value:value,isValid:true
        })
    }
    updateValueStateWithError(value){
        this.setState({
            ...this.state,value:value,isValid:false
        })
    }
    handlerOnFocus(){
    
        this.setState({
            ...this.state,touch:true
        })
    }
    handlerBlur(event){
        const value = event.target.value;
        this.isValid(value);
    }
    handleKeyDown(event){
        const value = event.target.value;
        if(this.props.mask){
            this.updateValueState(this.props.mask(value,event));
        }
    }   
    render(){
        return <div>
            <input 
                className = {
                    this.state.isValid?"chekc":"error"
                }
                type = {
                    this.props.type
                }
                name = {
                this.props.name !== undefined?this.props.name:""
                }
                value = {this.state.value}
                onChange = {this.handlerChange}
                onFocus = {this.handlerOnFocus}
                onBlur = {this.handlerBlur}
                onKeyDown = {this.handleKeyDown}
                placeholder = {this.props.placeholder}
                />
                <span>{!this.state.isValid?this.props.messageError:""}</span>
        </div>
    }
}