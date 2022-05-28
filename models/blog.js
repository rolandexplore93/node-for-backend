const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create blog schema: Schema defines the structure of the type of data to be stored in the database colection
const blogSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true})

// create blog model based on the schema
// where to store the Blog module
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog