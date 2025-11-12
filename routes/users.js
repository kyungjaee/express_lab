const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.send('user list')
});
router.get('/new', (req, res)=> {
    res.send('new user form')
});
router.post('/', (req, res) => {

});
// router.get('/:id', (req,res)=> {
    //res.send('Getting user data: ${req.parmas.id}');
//});
router.route("/:id").get('/:id',(req,res)=> {
    res.send('Getting user data: ${req.params.id}');
}).delete((req, res)=> {
    res.send('Deleting user with id: ${req.params.id}');
}).put((req,res)=>{ 
    res.send('updating user with id: ${req.params.id}');
    });

module.exports = router;