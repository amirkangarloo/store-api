'use strict'

const Product = require('../models/product')

const getAllProductsStatic = async (req, res, next) => {
    throw new Error('express testing error')
    res.status(200).send({
        msg: "products testing route"
    })
}

const getAllProducts = async (req, res, next) => {

    const {featured, company, name} = req.query
    const queryObj = {}

    if (featured) {
        queryObj.featured = featured === "true" ? true : false
    } 
    if (company) {
        queryObj.company = company
    }
    if (name) {
        queryObj.name = name
    }

    const products = await Product.find(queryObj)

    res.status(200).send({
        "Number of producs": products.length,
        products
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}