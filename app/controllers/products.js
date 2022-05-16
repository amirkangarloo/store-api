'use strict'

const Product = require('../models/product')

const getAllProducts = async (req, res, next) => {

    const {
        featured,
        company,
        name,
        sort,
        fields,
        numericFilters
    } = req.query
    const queryObj = {}

    // select feature of the product
    if (featured) {
        queryObj.featured = featured === "true" ? true : false
    }

    // select company of the product
    if (company) {
        queryObj.company = company
    }

    // the search for the product name
    if (name) {
        queryObj.name = {
            $regex: name,
            $options: "i"
        }
    }

    // numeric filters
    if (numericFilters) {
        const operatorMap = {
            ">": "$gt",
            ">=": "$gte",
            "=": "$eq",
            "<": "$lt",
            "<=": "$lte"
        }
        const regEx = /\b(>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((itme) => {
            const [field, operator, value] = itme.split('-')
            if (options.includes(field)) {
                queryObj[field] = {
                    [operator]: Number(value)
                }
            }
        });
    }

    let result = Product.find(queryObj)

    // sort
    if (sort) {
        // customize sorting
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    } else {
        // default sort
        result = result.sort('created_at')
    }

    // fields
    if (fields) {
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }

    // pagination
    const page = Number(req.query.page) > 1 ? Number(req.query.page) : 1
    const limit = Number(req.query.limit) >= 1 ? Number(req.query.limit) : 10
    const skip = (page - 1) * limit

    result = result.skip(skip).limit(limit)

    // fetch products
    const products = await result

    res.status(200).send({
        "Number of producs": products.length,
        products
    })
}

module.exports = {
    getAllProducts
}