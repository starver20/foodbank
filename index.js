const  cons = require('consolidate');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const User = require('./models/foodBank');

const MONGODB_URI = `mongodb+srv://NewAmar:OfuAR4iKLMjZsQan@newamar.9xxre.mongodb.net/foodbank?retryWrites=true&w=majority`;

const app = express();
const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: "sessions",
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );

  app.use((req, res, next) => {
    // throw new Error('Sync Dummy');
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user._id)
      .then((user) => {
        if (!user) {
          return next();
        }
        req.user = user;
        next();
      })
      .catch((err) => {
        next(new Error(err));
      });
  });


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