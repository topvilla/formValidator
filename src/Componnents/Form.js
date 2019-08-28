import React,{useState,useEffect} from 'react';
import * as Validators from './Validators';
import InputNumber from './InputNumber';
import InputText from './InputText';
import InputCpf from './InputCpf';
import InputDate from './InputDate';
import Select from './Select';


export default function Form(){









        const [id,setId] = useState({value:0,valid:true})
        const [name,setName] = useState({value:0,valid:false})
        const [cpf,setCpf] = useState({value:0,valid:false})
        const [age,setAge] = useState({value:18,valid:true})
        const [birthDate,setBirthDate] = useState({value:0,valid:false})
        const [formIsValid,setFormIsValid] = useState(false)
        const [geners,setGeners] = useState([
            {value:'m',type:'Masculino'},
            {value:'f',type:'Feminino'},

        ])
        const [gener,setGener] = useState({value:0,valid:false});

        const listenId = (valor,isValid)=>{
            setId({value:valor,valid:isValid});
        }
        const listenName = (valor,isValid)=>{
            setName({value:valor,valid:isValid});
        }
        const listenCpf = (valor,isValid)=>{
            setCpf({value:valor,valid:isValid});
        }
        const listenAge = (valor,isValid)=>{
            setAge({value:valor,valid:isValid});
        }
        const listenBirthDate = (valor,isValid)=>{
            setBirthDate({value:valor,valid:isValid});
        }
        const listenGener = (valor,isValid)=>{
            setGener({value:valor,valid:isValid});
        }
        const formValidate = ()=>{
            if((id.valid) && (name.valid) && (cpf.valid) && (age.valid) && (birthDate.valid)){
                setFormIsValid(true);
            }else{
                setFormIsValid(false);
            }
        }
        useEffect(()=>{
            formValidate();
        },[id, name, cpf, age, birthDate]);
        const save = ()=>{ 
            alert('salvar');
        }
        return (<div>

        <form>
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
                  listen = {listenId}
                  value = {0}
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
                listen = {listenName}
                value = {""}
                messageError = {"Nome invalido"}
            />
            <label>Cpf</label>
            <InputCpf
                listen = {listenCpf}
                value = {""}
                messageError = "Cpf invalido"
            />
            <label>Idade</label>
            <InputNumber
                listen = {listenAge}
                value = {18}
                validator = {
                    [
                        Validators.max(100),
                        Validators.min(18)
                    ]
                }
                messageError = "Idade invalido"
            />
            <label>Genero</label>
            <Select
                mapElement = {
                    geners.map((element)=>{
                        return <option  key = {element.value } 
                        value = {element.value}>{element.type}</option>
                    })
                }
                listen = {listenGener}
            />
            <label>Data de nascimento</label>
            <InputDate
                listen = {listenBirthDate}
                name = "birthDate"
                messageError = {"Data de nascimento"}
            />
        </form>
        <button disabled = {!formIsValid} onClick = {save}>save</button>
        </div>
    )
}