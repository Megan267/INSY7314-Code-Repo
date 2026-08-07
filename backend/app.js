// call in required modules at the top of the file
const express = require("express");
// cors - resource sharing library - we use it to tell our backend which frontends may talk to it
const cors = require("cors");

const database = require("./middleware/dbMiddleware.js");

// add a section for calling in our routes
const homeRoutes = require("./routes/homeRoutes.js");
const bookRoutes = require("./routes/bookRoutes.js");
const authRoutes = require("./routes/authRoutes.js");

//create an instance of express for our application (singleton)
const app = express();

// this is where we call in middleware - between the declaration of the app, and the start point
app.use(express.json()); // express.json allows us to use json in requests and responses
//cors allows us 
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//when calling in our routes - we need to ensure that we do so AFTER we call in our middleware
app.use("/api/home", homeRoutes); 
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

// lastly, we tell the application to start listening
// we need to specify a port for the app to listen on, in this case, 3000
database.start().then(() => {
    app.listen(3000, () => {
    //once the app starts, we print out to the terminal 
    console.log("API started on port 3000");
    });
});
