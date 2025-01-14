const z=require('zod');

const creatTodo=z.object({
    tital:z.string(),
    description:z.string()
})

const updateTodo=z.object({
    id:z.string()
})

module.exports={
    creatTodo,
    updateTodo
}