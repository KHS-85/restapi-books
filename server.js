require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const booksRouter = require('./routes/books')
app.use('/books', booksRouter)

const categoriesRouter = require('./routes/categories')
app.use('/categories', categoriesRouter)

app.listen(3000, () => console.log('server started'))