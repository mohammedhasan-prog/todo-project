const mongoose = require("mongoose");
try {
    mongoose.connect('mongodb+srv://hasanalipali2:FNqprIhJ2KxqZgs9@cluster0.r5wox.mongodb.net/')
} catch (error) {
    console.log("Mongodb NOt Connected")
} 
const todoSchema = mongoose.Schema({
  tital: String,
  description: String,
  isCompleted: Boolean,
});

const todo=mongoose.model('todos',todoSchema);
module.exports ={ todo}