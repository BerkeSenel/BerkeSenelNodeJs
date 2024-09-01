require('dotenv').config({ path: `.env.${process.env.NODE_ENV || "development"}` })
const configFile = {
    "development": {
      "username": process.env.MYSQLDB_USERNAME,
      "password": process.env.MYSQLDB_ROOT_PASSWORD,
      "database": process.env.MYSQLDB_DATABASE,
      "host": process.env.MYSQLDB_HOST,
      "dialect": process.env.MYSQLDB_DIALECT,
      "port":process.env.MYSQLDB_PORT,
      "logging":true
    },
    "test": {
      "username": process.env.MYSQLDB_USERNAME,
      "password": process.env.MYSQLDB_ROOT_PASSWORD,
      "database": process.env.MYSQLDB_DATABASE,
      "host": process.env.MYSQLDB_HOST,
      "dialect": process.env.MYSQLDB_DIALECT,
      "port":process.env.MYSQLDB_PORT,
      "logging":false
    },
    "production": {
      "username": process.env.MYSQLDB_USERNAME,
      "password": process.env.MYSQLDB_ROOT_PASSWORD,
      "database": process.env.MYSQLDB_DATABASE,
      "host": process.env.MYSQLDB_HOST,
      "dialect": process.env.MYSQLDB_DIALECT,
      "port":process.env.MYSQLDB_PORT,
      "logging":false
    }
  }
  
  module.exports = configFile
  
