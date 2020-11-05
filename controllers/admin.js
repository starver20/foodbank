const Donor = require('../models/donor')
const Volunteer = require('../models/volunteer');
const Address = require('../models/address');
const Bank = require('../models/foodBank');

exports.getDonate = (req, res, next) => {
    res.render('bank/donate');
}

exports.postDonate = async (req, res, next) => {
    const name = req.body.name;
    const city = req.body.city;
    const phone = req.body.phone;
    const qty = req.body.qty;

    const donor = new Donor({
        name: name,
        city: city,
        phone: phone,
        qty: qty,
    });
    await donor.save();
    res.redirect('/');
}

exports.getVolunteer = (req, res, next) => {
    res.render('bank/volunteer');
}

exports.postVolunteer = async (req, res, next)=> {
    const name = req.body.name;
    const phone = req.body.phone;
    const city = req.body.city;

    const volunteer = new Volunteer({
        name:name,
        city:city,
        phone:phone
    });
    await volunteer.save();
    res.redirect('/');
}

exports.getSearch = async (req, res, next) => {
    const city = req.body.city
    
    Address.find({ad:city}).then((add)=> {
        add.forEach(element => {
                Bank.find({element: _id}).then((bank)=> {
                    banks.push(bank);
                })
            });
            console.log(banks);
    })

  
}