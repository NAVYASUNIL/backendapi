// import
const express = require("express")
// initialize
const app=new express()
app.use(express.json())
const dbarray=[
   { id:120 ,name:"Anu", age:23, dpt:"mathematics"},
   { id:120 ,name:"Anil", age:20, dpt:"Physics"},
]

app.get('/view',(req,res)=>{
    res.send(dbarray)
})
app.post('/add',(req,res)=>{
 console.log(req.body)
 dbarray.push(req.body)
 res.send("data added");
})
// port
app.listen(4050,()=>{
    console.log("port is running")
})
