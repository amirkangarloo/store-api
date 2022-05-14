'use strict'

require('dotenv').config()
require('express-async-errors')
const startApp = require('./app')

startApp(process.env.APP_PORT)