const express = require('express');
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.json());

let tasks = [
  {
    id: 1,
    title: 'Learn Angular',
  },
  {
    id: 2,
    title: 'Learn Javascript',
  },
];

//get all tasks
app.get('/api/tasks', function (req, res) {
 res.json(tasks)
})

//add new task
app.post('/api/tasks', function (req, res) {
  const title = req.body.title;
  tasks.push({
    id: new Date().getTime(),
    title: title,
  });
  res.json({ message: 'Task Added' });
});

//delete task by id
app.delete('/api/tasks/:id', function (req, res) {
 const taskId = +req.params.id
 tasks = tasks.filter((x) => x.id != taskId);
 res.json({ message: 'Task Deleted' });
})

app.listen(3000, ()=> console.log('server runnning on http://localhost:3000'))
