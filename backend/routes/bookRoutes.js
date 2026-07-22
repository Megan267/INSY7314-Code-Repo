// import express 
const express = require("express")

// because this is the home router, we call in the home controller
const { createBook, 
    getAllBooks, 
    getBook, 
    updateBook, 
    replaceBook, 
    deleteBook } = require('../controllers/bookController.js')

// set up an instance of the router class
const router = express.Router();

// each request requires a method, path, and a corresponding function in the the controller
// for this request, we define the following:
// method - get request (the user doesnt need to pass data for this request)
// path - what URL we need to go to trigger this request
// function - we say that when this request is triggered, run the healthCheck function in the controller
router.post("/", createBook); 

router.get("/", getAllBooks);

router.get("/:id", getBook);

router.put("/:id", replaceBook);

router.patch("/:id", updateBook);

router.delete("/:id", deleteBook);

module.exports = router;