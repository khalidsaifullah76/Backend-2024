const express = require("express");
const path = require('path');
const StudentController = require(path.join(__dirname, "/controllers/StudentController"));
const bodyParser = require('body-parser'); // Tambahkan middleware body-parser

const app = express();
app.use(express.json()); // Middleware untuk parsing JSON
app.use(bodyParser.urlencoded({ extended: false })); // Middleware tambahan

const studentRouter = express.Router();
studentRouter.get('/', StudentController.index);
studentRouter.post('/', StudentController.store);

app.use('/students', studentRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
