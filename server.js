import express from "express";
import cors from "cors";
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.get("/", (req, res) => {
  res.send("you hit server endpoint");
});


// Get all students
app.get('/api/students', (req, res) => {

  const students = [{
    name: 'pitipon',
    address: 'bkk',
    grade: '3.0',
    payment: true,
    graduted: true,
    batch: 1,
    major: 'imba',
    degree: 'master',
    _id: '87733232'
  },{
    name: 'pitipon',
    address: 'bkk',
    grade: '3.0',
    payment: true,
    graduted: true,
    batch: 1,
    major: 'imba',
    degree: 'master',
    _id: '123232442'
  }]

  res.json(students)
})

// Get student by id
app.get('/api/students/:id', (req,res) => {
  const id = req.params.id

  // I found this student from database by id
  const student = {
    name: 'pitipon',
    address: 'bkk',
    grade: '3.0',
    payment: true,
    graduted: true,
    batch: 1,
    major: 'imba',
    degree: 'master',
    _id: id
  }

  res.json(student)
})


// Create student
app.post('/api/students', (req, res) => {
  // We get information to create new student from body
  const body_name = req.body.name
  const body_batch = req.body.batch

  const student = {
    name: body_name,
    batch: body_batch
  }

  res.json(student)
})

// Update student
app.put('/api/students/:id', (req, res) => {
  // get id of student that we want to update
  const id = req.params.id

  // Get Body update
  const body_name = req.body.name
  const body_batch = req.body.batch

  const update_student = {
    name: body_name,
    batch: body_batch,
    _id: id
  }

  res.json(update_student)
})

// Delete students by id
app.delete('/api/students/:id', (req,res) => {
  // get id of student that we want to delete
  const id = req.params.id

  res.json({
    status: 'deleted',
    _id: id
  })
})


// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
