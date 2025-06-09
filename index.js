import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
const todos = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express.js", completed: false },
  { id: 3, title: "Build a REST API", completed: true },
];

app.all("/", (req, res) => {
  res.send("I am Up!");
});

// READ
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json({
    message: "Todo Created Successfully",
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const newTodo = req.body;
  const todoIds = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoIds);
  if (todoIndex !== -1) {
    todos[todoIndex]= {
      id:todoIds,
      ...newTodo,
    }
  }
  res.json({
    message: "Updated success fully",
  });
});

const PORT = 5111;
app.listen(PORT, () => [console.log("HI, I am running on port " + PORT)]);
