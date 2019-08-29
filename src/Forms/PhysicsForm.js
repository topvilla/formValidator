import React from 'react';
import FormBuilder from '../Componnents/FormBuilder';
import * as Validator from '../Componnents/Validators';

const PhysicsForm = ()=>{

    return(
        <FormBuilder subiscribe = {
            (data)=>{console.log(data)}
        }
        
        inputs = {
            [
                {
                    label:"Id",
                    type:"number",
                    name:"id",
                    validator:[
                        Validator.max(1000),
                        Validator.min(0),
                        Validator.require
                    ],
                    value:0,
                    messageError:"Id inválido"
                },
                {
                    label:"Name completo",
                    type:"text",
                    name:"name",
                    value:"",
                    validator:[
                      Validator.require,
                      Validator.textWithoutAccent
                    ],
                    messageError:"Nome invalido",
                    placeholder:'Nome completo por favor'
                },
                {
                    label:"Cpf",
                    type:"cpf",
                    name:"cpf",
                    value:"",
                    validator:[
                      Validator.require
                    ],
                    messageError:"cpf invalido",
                    placeholder:'cpf completo por favor'
                },
                {
                    label:"Idade",
                    type:"number",
                    name:"age",
                    validator:[
                        Validator.max(100),
                        Validator.min(0),
                        Validator.require
                    ],
                    value:0,
                    messageError:"idade inválido"
                },
                {
                    label:"Data de nascimento",
                    type:"date",
                    name:"birthDate",
                    value:"",
                    validator:[
                      Validator.require,
                    ],
                    messageError:"Data invalido",
                },
                {
                    label:"Name completo",
                    type:"select",
                    name:"gener",
                    value:"f",
                    elementsMap:[
                        {value:'m',type:'Masculino'},
                        {value:'f',type:'Feminino'}
                    ],
                    messageError:"Nome invalido",
                }

            ]
        }
        />
    );
}
export default PhysicsForm;