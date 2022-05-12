'use strict'

const mongoose = require('mongoose')

const connectDB = (url, dbName) => {
    mongoose.connect(`${url}/${dbName}`)
}

module.exports = connectDB