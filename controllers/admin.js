const Donor = require('../models/donor')

exports.getDonate = (req, res, next) => {
    res.render('bank/donors');
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