const express = require('express')
const router = express.Router()
const Category = require('../models/category')


// Getting all
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find()
        res.json(categories)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

})

// Getting one
router.get('/:id', getCategory, (req, res) => {
    res.json(res.category)

})

// Creating one
router.post('/', async (req, res) => {
    const category = new Category({
        category: req.body.category
    })

    try {
        const newCategory = await category.save()
        res.status(201).json(newCategory)
    }

    catch (err) {
        res.status(400).json({ message: err.message })
    }

})

// Updating one
router.patch('/:id', getCategory, async (req, res) => {
    if (req.body.category != null) {
        res.category.category = req.body.category
    }
    try {
        const updatedCategory = await res.category.save()
        res.json(updatedCategory)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})

// Deleting one
router.delete('/:id', getCategory, async (req, res) => {
    try {
        await res.category.remove()
        res.json({ message: 'Deleted Category' })
    }
    catch (err) {
        res.status(500).json({ message: err.message})
    }

})

async function getCategory(req, res, next) {
    let category
    try {
        category = await Category.findById(req.params.id)
        if (category == null) {
            return res.status(404).json({ message: 'Cannot find category' })
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.category = category
    next()
}

module.exports = router