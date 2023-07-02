const express = require('express');
const cookieParser = require('cookie-parser');


const _ = require("lodash");
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
//use express router

app.use(express.urlencoded());
app.use(cookieParser());
app.use('/', require('./routes/index1'));


app.use(expressLayouts);
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});