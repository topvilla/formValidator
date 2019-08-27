import React,{useState} from 'react';
import * as Validators from './Validators';
const Select = (props)=>{
    const [value,setValue] = useState("");
    const [valid,setValid] = useState(false);
    const [touch,setTouch] = useState(false);


    const isValid = (value)=>{
        if(Validators.require(value) && touch){
            setValid(true);
            props.listen(value,true);
            setValue(value);
        }else{
            setValue(value);
            props.listen(value,false);
            setValid(false);
        }
    }   
    const handlerChange = (event)=>{
        const value = event.target.value;
        isValid(value);
       
    }
    const handlerFocus = ()=>{
        setTouch(true);
    }
    const handlerBlur = (event)=>{
        const value = event.target.value;
         isValid(value);

    }
    return(
        <select 
        className = {
            valid || !touch?"chekc":"error"
        }
        name        = {props.name} 
        value       = {value} 
        onChange    = {handlerChange}
        onFocus     = {handlerFocus}
        onBlur      = {handlerBlur}
        >
            {
                props.mapElement !== undefined?props.mapElement:""
            }
        </select>
    );
}
export default Select;