const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web.js')

// define express app
const app = express()
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

// route destination
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port}`)
})


