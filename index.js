const  cons = require('consolidate');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

const MONGODB_URI = `mongodb+srv://NewAmar:OfuAR4iKLMjZsQan@newamar.9xxre.mongodb.net/foodbank?retryWrites=true&w=majority`;

const app = express();
//code to set html as default engine 
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const bankRoutes = require('./routes/bank');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
app.use(bankRoutes);
app.use(authRoutes);
app.use(adminRoutes);

mongoose.connect(MONGODB_URI).then((result)=> {
    console.log('connected to 4000');
    app.listen(4000);
}).catch((err)=> {
    console.log(err);
});