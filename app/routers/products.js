'use strict'

const express = require('express')
const router = express.Router()
const {
    getAllProducts
} = require('../controllers/products')
const methodNotAllowed = require('../middleware/method-not-allowed')

router.get('/', getAllProducts)
router.all('/', methodNotAllowed)

module.exports = router