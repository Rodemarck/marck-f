const logged = (req,res,next)=>{
    console.log(req.session)
    if(req.session.userid)
        next()
    res.redirect('/login')
}

const logged_out = (req,res,next)=>{
    if(req.session.userid)
        return res.redirect('/home')
    next()
}
export{logged,logged_out}