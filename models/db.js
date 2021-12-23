// const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");
const dotenv = require("dotenv");

const Pool = require('pg').Pool

const connectionString = process.env.BD_DETAILS;

const pool = new Pool({
  connectionString,
})

//set path for env file
dotenv.config({ path: './.env' });

//Create a connection to the database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST, 
//   user: process.env.DB_USER,
//   password: process.env.DB_PASW,
//   database: process.env.DB_NAME
// });


// var connection = mysql.createConnection(process.env.BD_DETAILS);

// open the MySQL connection
// connection.connect(error => 
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// module.exports = connection;
pool.query('SELECT NOW()',(err, res) =>{
  console.log(err, res)
  pool.end()
})
module.exports = pool;