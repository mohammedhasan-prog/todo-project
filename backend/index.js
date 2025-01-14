const express = require("express");
const { creatTodo, updateTodo } = require("./typs");
const { todo } = require("./db");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hasanalipali2:FNqprIhJ2KxqZgs9@cluster0.r5wox.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit the application if DB connection fails
  }
}

dbConnect();

app.post("/todo", async (req, res) => {
  const { tital, description } = req.body;

  // Validate input
  const validation = creatTodo.safeParse({
    tital,
    description,
  });

  if (!validation.success) {
    return res.status(400).json({
      msg: "Invalid input data",
      errors: validation.error.errors,
    });
  }

  try {
    // Create a new todo
    await todo.create({
      tital,
      description,
      isCompleted: isCompleted || false, // Default to false if not provided
    });
    res.status(201).json({
      msg: "Todo created successfully",
    });
  } catch (err) {
    console.error("Error creating todo:", err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find();
    res.json({ todos });
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.put("/completed", async (req, res) => {
  const { _id } = req.body;

  // Validate input
  const updateValidation = updateTodo.safeParse({
    id: _id,
  });

  if (!updateValidation.success) {
    return res.status(400).json({
      msg: "Invalid input data",
      errors: updateValidation.error.errors,
    });
  }

  try {
    // Update todo status to completed
    const updatedTodo = await todo.findByIdAndUpdate(
      _id,
      { isCompleted: true },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({
        msg: "Todo not found",
      });
    }

    res.json({
      msg: "Todo marked as completed",
      todo: updatedTodo,
    });
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).json({
      msg: "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
