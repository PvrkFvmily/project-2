const express = require('express')
require('dotenv').config()
const axios = require('axios')
const db = require('../models')
const router = express.Router()

// GET /villagers show all the villagers
router.get('/', async (req, res) => {
    try {
        let acnhUrl = process.env.API
        const response = await axios.get(acnhUrl)
        // console.log(response.data[0].personality)
        res.render('villagers/all.ejs', {
            villagers: response.data,
        })
    } catch (error) {
        console.log('cannot get info', error)
    }
})


// // GET /species
// router.get('/species', async (req, res) => {
//     try {
//         let acnhUrl = process.env.API
//         const response = await axios.get(acnhUrl)
//         // console.log(response.data[0].personality)
//         res.render('villagers/species.ejs', {
//             villager: response.data,
//         })
//     } catch (error) {
//         console.log('cannot get info', error)
//     }
// })
// // GET /gender
// router.get('/gender', async (req, res) => {
//     try {
//         res.send('list all the villagers by gender here with ejs')
//     } catch (error) {
//         console.log('cannot get info', error)
//     }
// })

// // GET /hobby
// router.get('/hobby', async (req, res) => {
//     try {
//         res.send('list all the villagers by hobby here with ejs')
//     } catch (error) {
//         console.log('cannot get info', error)
//     }
// })



// GET /:id show detail of a villager
router.get('/:id', async (req, res) => {
    try {
        let acnhUrl = process.env.API + '/' + req.params.id
        const getComment = await db.comment.findAll()
        const response = await axios.get(acnhUrl)
        // console.log(acnhUrl)
        // console.log(response.data)
        console.log(getComment)
        res.render('villagers/details.ejs', {
            villagers: response.data,
            users: res.locals.user,
            comments: getComment
        })
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// POST /:id add comment
router.post('/:id', async (req, res) => {
    try {
        const createComment = await db.comment.create({
            userId: req.body.userId,
            villagerId: req.body.villagerId,
            comment: req.body.comment
        })
        res.redirect('/villagers')
    } catch (error) {
        console.log('cannot get info', error)
    }
})

// router export

module.exports = router;