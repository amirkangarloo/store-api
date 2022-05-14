'use strict'

const getAllProductsStatic = async (req, res, next) => {
    throw new Error('express testing error')
    res.status(200).send({
        msg: "products testing route"
    })
}

const getAllProducts = async (req, res, next) => {
    res.status(200).send({
        msg: "products route"
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}