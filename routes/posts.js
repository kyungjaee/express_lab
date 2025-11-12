const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.send('All posts')
});
router.get('/new', (req, res)=> {
    res.send('new post form')
});

module.exports = router;