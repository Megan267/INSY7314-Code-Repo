// call in required modules at the top of the file
const express = require("express");

const database = require("./middleware/dbMiddleware.js");

// add a section for calling in our routes
const homeRoutes = require("./routes/homeRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");

//create an instance of express for our application (singleton)
const app = express();

// this is where we call in middleware - between the declaration of the app, and the start point
app.use(express.json()); // express.json allows us to use json in requests and responses

//when calling in our routes - we need to ensure that we do so AFTER we call in our middleware
app.use("/api/home", homeRoutes); 
app.use("/api/books", bookRoutes);

// lastly, we tell the application to start listening
// we need to specify a port for the app to listen on, in this case, 3000
database.start().then(() => {
    app.listen(3000, () => {
    //once the app starts, we print out to the terminal 
    console.log("API started on port 3000");
    });
});
