const index = (req,res)=>{
    res.render('index',{title:'Inicio'})
}
const home = (req,res)=>{
    res.send("você está em /home")
}
export {index,home}