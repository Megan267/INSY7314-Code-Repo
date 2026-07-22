// import express 
const express = require("express")

// because this is the home router, we call in the home controller
const { healthCheck, greet, message } = require('../controllers/homeController.js')

// set up an instance of the router class
const router = express.Router();

// each request requires a method, path, and a corresponding function in the the controller
// for this request, we define the following:
// method - get request (the user doesnt need to pass data for this request)
// path - what URL we need to go to trigger this request
// function - we say that when this request is triggered, run the healthCheck function in the controller
router.get('/healthCheck', healthCheck); 

router.post('/greet', greet);

router.post('/message', message);

// this is the same as making something public in C#, so that we can access it elsewhere in the app
module.exports = router;