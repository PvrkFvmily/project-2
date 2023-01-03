const express = require('express')
const db = require('../models')
const router = express.Router()

// GET /
router.get('/', async (req, res) => {
    try {
        res.send('list all the villagers here with ejs')
    } catch (error) {
        console.log('cannot get info', error)
    }
})


// GET /species
router.get('/species', async (req, res) => {
    try {
        res.send('list all the villagers by species here with ejs')
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// GET /gender
router.get('/gender', async (req, res) => {
    try {
        res.send('list all the villagers by gender here with ejs')
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// GET /hobby
router.get('/hobby', async (req, res) => {
    try {
        res.send('list all the villagers by hobby here with ejs')
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// // GET /:id
// router.get('/:id', async (req, res) => {
//     try {
//         res.send('list all the villagers here with ejs', req.params.id)
//     } catch (error) {
//         console.log('cannot get info', error)
//     }
// })

// router export
module.exports = router