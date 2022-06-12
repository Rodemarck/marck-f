import * as controller from '../controller/_.js'
import * as middleware from '../middleware/_.js'

const router =(app,router)=>{
    router.get('/',controller.home.index)
    router.get('/home',middleware.auth.logged,controller.home.home)

    router.post('/login',middleware.auth.logged_out, controller.login.login)
    router.get('/login',middleware.auth.logged_out, controller.login.form_login)
    
    router.get('/sess',(req,res)=>{
        res.send(req.session)
    })

    app.use(router)
}


export {router}