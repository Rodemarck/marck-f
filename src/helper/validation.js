import validator from "validator";
import { connect } from "../db/db.js";



const validate_form_register = (body) =>{
    let erro = {
        email :[],
        login:[],
        password:[],
        name:[]
    }
    let email = body.email.trim()
    let login = body.login.trim()
    let passw = body.password.trim()
    let name  = body.name.trim()


    let db = await connect()

    //e-mail
    if(!validator.isEmail(email)) erro.email.push('Não é um e-mail válido')
    let promisse_check_email = db.query

    //login
    if(login.length < 3 ) erro.login.push('Campo login é muito pequeno')
    else if(login.length > 63 ) erro.login.push('Campo login é muito grande')
    if(!validator.isWhitelisted(body.login,'[a-zA-Z0-9\\s]+'))erro.login.push('Possui caracteres que não são permitidos')

    //password
    if(passw.length < 4) erro.password.push('Campo senha é muito pequeno')

    //name
    if(name.length < 2 ) erro.name.push('Campo nome é muito pequeno')
    else if(name.length > 255 ) erro.name.push('Campo nome é muito grande')
    if(!validator.isWhitelisted(body.name,'[a-zA-Z0-9\\s]+'))erro.name.push('Possui caracteres que não são permitidos')

    return erro
}

export {validate_form_register}