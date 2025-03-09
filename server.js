const express = require('express')
require('dotenv').config()

// define express app
const app = express()
const port = process.env.PORT || 8080;
const hostname = process.env.HOSTNAME;

// config template engine
app.set('view engine', 'pug')


// route destination
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello World' })
})

app.get('/abc', (req, res) => {
    res.render('abc', { title: 'Hey', message: 'This is abc route!' })
})

app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port}`)
})


