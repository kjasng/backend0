const express = require('express')

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World with Kjas Nguyen')
})

app.get('/abc', (req, res) => {
    res.send('Check abc')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


