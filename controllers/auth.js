
const Bank = require('../models/foodBank');
const Address = require('../models/address');

exports.getLogin = (req, res, next) => {
    res.render('auth/login');
}

exports.getSignup = (req, res, next) => {
    res.render('auth/signup');
}

exports.postSignup = async (req, res, next) => {
    const username = req.body.username;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    
    const bank = new Bank({
        username: username,
        phone: phone,
        email: email,
        password: password
    });
   await bank.save();

   const addr = new Address({
       ad: address,
       bankId: bank
   })

   await addr.save();


   res.redirect('/login');
}

exports.postLogin = (req, res, next) => {
    console.log(req.body);
}