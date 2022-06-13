import {connect} from "../db/db.js"
import * as bcrypt from "bcrypt"
import { validation } from "../helper/_.js"



const login = async (req, res) =>{
    let login = req.body.login
    let password = req.body.password

    let con = await connect()
    let data = await con.query(`SELECT * FROM users WHERE login=? OR email=?`,[login,login])
    await con.end()
    if(data.length != 1) {
        return res.render('auth/login',{erro:{
            login:'usario desconhecido'
        }})
    }

    if(await bcrypt.compare(password, data[0].password)){
        delete data[0].password
        req.session.userid = data[0].id
        req.session.user = data[0]
        console.log(req.session);
        return res.redirect('/home')
    }
    res.render('auth/login',{erro:{
        login:'Combinação incorreta',
        password:'Combinação incorreta'
    }})
}
const logout = async(req,res)=>{
    req.session.destroy();
    res.redirect('/');
}
const form_login = async(req,res)=>{
    res.render('auth/login')
}
const form_register = async(req,res)=>{
    res.render('auth/register')
}

const register = async(req,res)=>{
    if (validation.validate_form_register(req.body)){
        
    }
}
export {login,logout,form_login,form_register,register}