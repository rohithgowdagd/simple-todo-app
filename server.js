const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('.')); // Serves the HTML file

let todos = [{ id: 1, task: "Learn Git & GitHub" }];

// API to get all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// API to add a new todo
app.post('/api/todos', (req, res) => {
    const newTodo = { id: Date.now(), task: req.body.task };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});