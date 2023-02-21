const express = require("express")
const app= express()
const cors =require("cors")
const port= 4000
const studentDetails={name:"trinadh",age:22,gender:"male"}
const productsDeails=require("./products")
const mongoose=require("mongoose")
app.use(cors())

mongoose.connect("mongodb+srv://srinivascharan:charan79@cluster0.efi2j9t.mongodb.net/?retryWrites=true&w=majority"
       .then(()=>{
        console.log("Database connected successfully ")
})



app.get("/",(req,res)=>{
  res.send("it is javascript")
})

app.get("/student",(req,res)=>{
  return res.json(studentDetails)

})


app.get("/products",(req,res)=>{
  return res.json(productsDeails)

})

app.listen(port,()=>console.log("server is running on port",port))