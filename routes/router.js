//import express
const express = require('express')

const filmsController = require('../controllers/filmsController')

//using express create object for routerclass in order to setup path
const router = new express.Router()

//api
//get-all-films
router.get('/films/all-films',filmsController.getallfilms)
//view films
router.get('/films/view-films/:id',filmsController.viewfilms)

module.exports = router