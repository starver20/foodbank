
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
    const username = req.body.username;
    const password = req.body.password;

    Bank.findOne({username:username})
    .then((user)=> {
        if(!user){
            return res.status(422).render('/auth/login');
        }
        if(password===user.password){
            req.session.isLoggedIn = true;
            req.session.user = user;
            return req.session.save((err)=> {
                console.log(err);
                return res.redirect('/bank');
            })
        }
    }).catch((err) => {
        const error = new Error(err);
        error.httpStatusCode = 500;
        return next(error);
      });
};