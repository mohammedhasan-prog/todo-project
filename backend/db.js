const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  tital: String,
  description: String,
  isCompleted: Boolean,
});

const todo=mongoose.model('todos',todoSchema);
module.exports ={ todo}