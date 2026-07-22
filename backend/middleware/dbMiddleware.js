//call in the required modules
const mongoose = require("mongoose");
//calls in the .env file we created (for the connectionString later)
require("dotenv").config();

//create a function to init database connection
const database = {
    start: async () => {
        try{
            //get the connectionString
            const connString = process.env.CONN_STRING;
            //wait for the connection to succeed
            await mongoose.connect(connString);
            //print the appropriate message
            console.log("The database connection has connected");
        } catch(error){
            console.log("Cannot connect to the database, " + error);
            //if we cant use the DB, when whats the point of continuing 
            //so we exit
            process.exit(1);
        }
    },
};

module.exports = database;