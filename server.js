'use strict'

require('dotenv').config()
const startApp = require('./app')

startApp(process.env.APP_PORT)