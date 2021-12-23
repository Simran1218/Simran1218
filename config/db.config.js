const dotenv = require("dotenv");

dotenv.config({ path: './.env' });

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASW,
    DB: process.env.DB_NAME
  };

  
  