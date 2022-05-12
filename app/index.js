'use strict'

const express = require('express')
const app = express()

const connectDB = require('./db/connect')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// roote
app.get('/', (req, res) => {
    res.status(200).send(
        '<h1> Store API </h1> <a href="/api/v1/products"> products route </a>'
    )
})

// products route


app.use(notFoundMiddleware)
app.use(errorMiddleware)

module.exports = async (port) => {
    try {
        // connectDB
        const {
            MONGO_URL,
            MONGO_DB_NAME
        } = process.env
        await connectDB(MONGO_URL, MONGO_DB_NAME)
        app.listen(port, () => {
            console.log(`App listen on port ${port} ...`);
        })
    } catch (error) {
        console.log(error);
    }
}