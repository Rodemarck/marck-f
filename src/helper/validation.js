import validator from "validator";
console.log(validator.isEmail("tode@gmasil.com"));

const validate_form_register = (body) =>{
    let erro = {
        email :[],
        login:[],
        password:[],
        name:[],
        pic:[]
    }
    if(!validator.isEmail(body.email)) erro.email = 'não é um email válido'

    if(!validator.isWhitelisted(body.login,'[a-zA-Z0-9\\s]+'))
}

export {validate_form_register}