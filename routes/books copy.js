// const express = require('express')
// const router = express.Router()
// const Book = require('../models/book')
// const Category = require('../models/category')

// // Getting all
// router.get('/', async (req, res) => {
//     try {
//         const books = await Book.find()
//         for (i in books) {
//             books[i].category = await Category.findById(books[i].category);
//         }
//         res.json(books)
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message })
//     }

// })

// // Getting one
// router.get('/:id', getBook, (req, res) => {
//     res.json(res.book)

// })

// // Creating one
// router.post('/', async (req, res) => {
//     const book = new Book({
//         title: req.body.title,
//         summary: req.body.summary,
//         author: req.body.author,
//         category: req.body.category
//     })

//     try {
//         const newBook = await book.save()
//         res.status(201).json(newBook)
//     }

//     catch (err) {
//         res.status(400).json({ message: err.message })
//     }

// })

// // Updating one
// router.patch('/:id', getBook, async (req, res) => {
//     if (req.body.title != null) {
//         res.book.title = req.body.title
//     }
//     if (req.body.summary != null) {
//         res.book.summary = req.body.summary
//     }
//     try {
//         const updatedBook = await res.book.save()
//         res.json(updatedBook)
//     }
//     catch (error) {
//         res.status(400).json({ message: error.message })
//     }

// })

// // Deleting one
// router.delete('/:id', getBook, async (req, res) => {
//     try {
//         await res.book.remove()
//         res.json({ message: 'Deleted Book' })
//     }
//     catch (err) {
//         res.status(500).json({ message: err.message })
//     }

// })

// async function getBook(req, res, next) {
//     let book
//     try {
//         // const books = await Book.find()
//         book = await Book.findById(req.params.id)
//         // book.category = Map await Category.findById(book.category);
//         for (i in book.category) {
//             book.category[i] = await Category.findById(book.category[i]);
//         }
//         if (book == null) {
//             return res.status(404).json({ message: 'Cannot find book' })
//         }
//     }
//     catch (err) {
//         return res.status(500).json({ message: err.message })
//     }
//     res.book = book
//     next()
// }

// module.exports = router