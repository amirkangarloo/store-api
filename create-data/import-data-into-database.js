'use strict'

require('dotenv').config()
const connectDB = require('../app/db/connect')
const Product = require('../app/models/product')
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        // connectDB
        const {
            MONGO_URL,
            MONGO_DB_NAME
        } = process.env
        await connectDB(MONGO_URL, MONGO_DB_NAME)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Importing products into the database is a success.')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()