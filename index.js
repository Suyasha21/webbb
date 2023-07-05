import express from 'express';


import cookieParser from 'cookie-parser';

import pkg from 'body-parser';
const { urlencoded } = pkg;



const port = 8000;
import expressLayouts from 'express-ejs-layouts';
// import db from './config/mongoose';
// import session from 'express-session';
// import { initialize, session as _session } from 'passport';
// import passportLocal from './config/passport-local-strategy';
//use express router

const app= express();

app.use(urlencoded({extended: true }));
app.use(cookieParser());



app.use(expressLayouts);
app.set('layout extractStyles' , true);
app.set('layout extractScripts' , true);
//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use({
    name:'Codeial',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    }
});
app.use(initialize());
app.use(_session());
app.use('/', require('./routes'));
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
});