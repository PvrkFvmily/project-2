const express = require('express')
const axios = require('axios')
const db = require('../models')
const router = express.Router()

// GET /
router.get('/', async (req, res) => {
    try {
        let acnhUrl = 'https://acnhapi.com/v1a/villagers'
        const response = await axios.get(acnhUrl)
        // console.log(response.data[0].personality)
        res.render('villagers/all.ejs', {
            villager: response.data,
        })
    } catch (error) {
        console.log('cannot get info', error)
    }
})


// GET /species
router.get('/species', async (req, res) => {
    try {
        let acnhUrl = 'https://acnhapi.com/v1a/villagers'
        const response = await axios.get(acnhUrl)
        // console.log(response.data[0].personality)
        res.render('villagers/species.ejs', {
            villager: response.data,
        })
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

// GET /:id
router.get('/:id', async (req, res) => {
    try {
        let acnhUrl = `https://acnhapi.com/v1a/villagers/${req.params.id}`
        const response = await axios.get(acnhUrl)
        res.render('villagers/details.ejs', {
            villager: response.data,
            user: res.locals.user
        })
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// router export

module.exports = router;