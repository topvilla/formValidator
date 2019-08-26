export const cpf = (input,event)=>{
        if(input.length === 3 && event.key !== "Backspace"){
            return input+"."
        }
        if(input.length === 7 && event.key !== "Backspace"){
            return input+"."
        }
        if(input.length === 11 && event.key !== "Backspace"){
            return input+"-"
        }
        if(input.length === 14 && event.key !== "Backspace"){
            return input;
        }
    return input;
}