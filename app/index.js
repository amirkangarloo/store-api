'use strict'

const express = require('express')
const app = express()

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())



module.exports = (port) => {
    app.listen(port, () => {
        console.log(`App listen on port ${port} ...`);
    })
}