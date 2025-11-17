const express = require('express');

const router = express.Router();

router.get('/', (req, res)=> {
    res.render('users/list', {users:users});
});
router.get('/new', (req, res)=> {
    res.send('new user form')
});
router.post('/', (req, res) => {
    // res.send('user created');
    const name = req.body.firstName;
    const isValid = firstName !==""; //check if they are there 
    if(isValid) 
    {
    console.log('adding user: ${name}');
    users.push({name:firstName});
    console.log('new set of users: ${users}');
     }
     else{
        console.log("error adding user");
        res.render("users/new", {firstName,firstName});
     }
    

});
// router.get('/:id', (req,res)=> {
    //res.send('Getting user data: ${req.parmas.id}');
//});
router.route("/:id").get((req,res)=> {
    res.send('Getting user data: ${req.params.id}');
}).delete((req, res)=> {
    res.send('Deleting user with id: ${req.params.id}');
}).put((req,res)=>{ 
    res.send('updating user with id: ${req.params.id}');
    });
    

const users =[{name: "Josh"}, {name: "Joshua"}];
router.param("id", (req, res, next, id)=> {
    console.log('Accessing user #${id}');
    next(); 
});    

module.exports = router;