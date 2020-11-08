const mongoose = require('mongoose')

const bookschema = new mongoose.Schema({
    cover: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    bookDato: {
        type: Date,
        required: true,
        default: Date.now
    },
    category: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }],
})

module.exports = mongoose.model('Book', bookschema)