const express = require('express');
const postRouter = require('./routes/posts');
const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');
app.use('/post', newPost);

app.get('/', (req, res)=> {
    console.log('here');
    res.render("index", {user: "Josh"});
}); // this function will run when someone goes to the root folder
app.get('/post', (req, res)=> {
    res.send('posts')
});
app.get('/post/new', (req, res)=> {
    res.send('new post form')
});
app.listen(3030);




