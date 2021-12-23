const dotenv = require("dotenv");
const express = require("express"); 
// use  package using required
const bodyParser = require("body-parser");
const app = express();

const app1 = express();
// set path
dotenv.config({ path: './.env' });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./routes/employee.routes.js")(app1);

app.listen(3000, () => {
  console.log("Welcome "+process.env.MY_VAR)
  console.log("Server is running on port 3000.");
});

app1.listen(8080,()=>{
  console.log("Server is running on port 8080.");
});



