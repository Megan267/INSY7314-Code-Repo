// call in required libaries
const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
            type: String,
            required: true,
            trim: true,
        },
        isbn: {
            type: String,
            required: true,
            trim: true,
        },
        publishedYear: Number,
        genre: {
            type: String,
            enum: ["Fiction", "Non-Fiction", "Textbook"],
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    },
);
//turn the shcema into a model
const Book = mongoose.model("Book", bookSchema);
//then export so it can be used elsewhere
module.exports = Book;