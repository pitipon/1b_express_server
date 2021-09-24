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

app.get("/api/user", (req, res) => {
  res.json({
    name: 'mo',
    email: 'pitipon@gmail.com'
  })
})


app.get("/api/products", (req, res) => {
  res.json([{
    name: 'milk',
    price: 20
  }])
})

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id
  res.json({
    name: 'milk',
    price: 20,
    _id: id
  })
})

app.post("/api/products/:id", (req, res) => {
  const id = req.params.id
  const body_name = req.body.name
  const body_price = req.body.price
  res.json({
    name: body_name,
    price: body_price,
    _id: id
  })
})

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
