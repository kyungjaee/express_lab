const express = require('express');

const app = express(); //calling this function sets up a server
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    console.log('here');
    res.render("index");
}); // this function will run when someone goes to the root folder

app.listen(3030);

