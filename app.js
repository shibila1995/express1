var express=require('express')
var app= express()
app.get('/', ( req, res)=>{
res.send("hello")
})
app.get('/home',(req,res)=>{
    res.send("hello home")
})
app.get('/contact',(req,res)=>{
    res.send("contact page")
})
app.listen(3001,()=>{

console.log("server started at http://localhost:3001/home")
})