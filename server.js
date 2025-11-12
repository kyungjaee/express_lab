const express = require('express');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');


const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
app.use('/post', newPost);
app.use('/users, userRouter')
app.get('/', (req, res)=> {
    console.log('here');
    res.render("index", {user: "Josh"});
}); // this function will run when someone goes to the root folder
app.get('/', (req, res)=> {
    res.render('index', {user: "Josh",});

});


app.listen(3030);




