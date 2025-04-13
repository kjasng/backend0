const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello World & Wide' })
})

router.get('/abc', (req, res) => {
    res.render('abc', { title: 'Hey', message: 'This is abc route!' })
})

module.exports = router;