const express=require('express')
const  { creatTodo,updateTodo } =require( './typs');
const {todo}=require('./db')
const cors=require('cors')

const app=express();
app.use(express.json())
app.use(cors());

app.post('/todo',async (req,res)=>{
    const {tital,description,isCompleted}=req.body;

    const validation=creatTodo.safeParse({
        tital,
        description,
         
    })
if (!validation.success){
    res.status(404).json({
        msg:"write correct input"
    })

   await  todo.create(({
        tital,description,isCompleted
    }))
    res.json({
        msg:"Todo create succesfully"
    })
}

   
})

app.get('/todos',async (req,res)=>{
const todos=await todo.find();
res.json({todos});
})

app.put('/completed',async (req,res)=>{
    const _id=req.body.id;

    const Updatevalidation=updateTodo.safeParse({
        id:_id
    })
if (!Updatevalidation.success){
    res.status(404).json({
        msg:"write correct input"
    })

    await  todo.update({
        _id:_id
    },{
        isCompleted:true
    })

    res.json({
        msg:"mark as completed"
    })
}
})
app.listen(3000,()=>{
    console.log("connect to server")
});