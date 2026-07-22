const Book = require("../models/bookModel.js");

// C - Create
const createBook = async (req, res) => {
    try{
        const {title, author, isbn, publishedYear, genre} = req.body;

        if(!title || !author || !publishedYear || !isbn || !genre){
            return res.status(400).json({ message: "Please ensure all required fields are present."});
        }
        //create a new book object using the Book model we created, using the req.body to get data
        const book = Book.create(req.body);
        //return the book object as json (201 - object created)
        res.status(201).json(book);   
    } catch (error) {
        res.status(500).json({ message: "Server explod" });
    }
};

// R - Read (read ALL object)
const getAllBooks = async (req, res) => {
    try {
        //get ALL books using the model (which is our link to the database)
        const books = await Book.Find();
        //convert the array to json, and send to the user
        return res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Server explod" });
    }
};

// R - Read (read ONE object)
const getBook = async (req, res) => {
    try {
        //check if the ID parameter was passed with the request
        if (!req.params.id) {
            return res.status(404).json({ message: "An ID is required in order to get a book" });
        }
        const book = await Book.findById(req.params.id);
        //if it cannot find a book
        if (!book) {
            return res.status(404).json({ message: "Book with that ID does not exist in the collection" });
        }
        //if book IS found, return book
        return res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Server explod" });
    }
};

// U - Update (Partial Update, not changing entire book, but some aspects)
const updateBook = async (req, res) => {
    try {
        //check if they've passed a Book ID
        if (!req.params.id) {
            return res.status(404).json({ message: "An ID is required in order to get a book" });
        }
        //check for updated information
        if(req.body.length == 0){
            return res.status(400).json({ message: "Please provide information to update the book" });
        }
        //next we update the book
        //we pass the ID of the book we want to update, the updated information and some options
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        //if the book cannot be found
        if (!book) {
            return res.status(404).json({ message: "No book matching that ID in the collection" });
        }
        //otherwise, return updated book
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Server explod" });
    }
};

// U - Update (replace a book with an updated book)
const replaceBook = async (req, res) => {
    try {
        //check if they've passed a Book ID
        if (!req.params.id) {
            return res.status(404).json({ message: "An ID is required in order to get a book" });
        }
        //check for updated information
        if(req.body.length == 0){
            return res.status(400).json({ message: "Please provide information to update the book" });
        }
        //next we update the book
        //we pass the ID of the book we want to update, the updated information and some options
        const book = await Book.findOneAndReplace(req.params.id, req.body, { new: true, runValidators: true });
        //if the book cannot be found
        if (!book) {
            return res.status(404).json({ message: "No book matching that ID in the collection" });
        }
        //otherwise, return updated book
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Server explod" });
    }
};

// D - Delete
const deleteBook = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(404).json({ message: "An ID is required in order to delete a book" });
        }
        //delete the book
        const book = await Book.findByIdAndDelete(req.params.id);
        //if book wasnt found, 404
        if (!book) {
            return res.status(404).json({ message: "No book matching that ID in the collection" });
        }
        //otherwise, return deleted book
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Server explod" });
    }
};

module.exports = { 
    createBook, 
    getAllBooks, 
    getBook, 
    updateBook, 
    replaceBook, 
    deleteBook
};