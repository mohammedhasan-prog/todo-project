const express=require('express')
import { creatTodo,updateTodo } from './typs';

const app=express();
app.use(express.json())

app.post('/todo',(req,res)=>{
    const {tital,description,isCompleted}=req.body;


   
})

app.get('/todos',(req,res)=>{

})

app.put('/complet',(req,res)=>{

})
app.listen(3000,()=>{
    console.log("connect to server")
});