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

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
