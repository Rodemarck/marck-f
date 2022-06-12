import express from "express";
import 'dotenv/config'
import * as webRouter from "./src/router/web.js";
import session from "express-session";
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log(__dirname);


const app = express()
app.set('trust proxy', 1)
app.use('/public', express.static(__dirname + '/public'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

const router = express.Router()

app.use(
    session({
        secret:process.env.secret,
        saveUninitialized:true,
        cookie: { 
            secure: false,
            maxAge: 60000
        },
        resave: false
    })
)

webRouter.router(app,router)

app.listen(process.env.PORTA,()=>{
    console.log('ouvindo vc batendo punheta');
})
