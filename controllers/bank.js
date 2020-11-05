
const Bank = require('../models/foodBank');
const Address = require('../models/address');
const Volunteer = require('../models/volunteer');
const Donor = require('../models/donor');

exports.getIndex = (req, res, next) => {
    res.render('bank/index');
    
}

exports.getBank = async (req, res, next) => {
    console.log('in bank');
    console.log(req.user);
    let city;
    await Address.findOne({bankId:req.user._id}).then((add)=> {
        city = add.ad;
        console.log(city);
    });
    await Volunteer.find({city:city}).then((volunteers)=>{
       res.render('bank/bank',{
           volunteers: volunteers
       })
    })
}
