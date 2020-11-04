const  cons = require('consolidate');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const app = express();
//code to set html as default engine 
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const bankRoutes = require('./routes/bank');
const authRoutes = require('./routes/auth');
app.use(bankRoutes);
app.use(authRoutes);


app.listen(4000, ()=> {
    console.log("listening on 4000");
})