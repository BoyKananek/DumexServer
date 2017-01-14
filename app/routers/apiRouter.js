var express = require('express');
var router = express.Router();
var Data = require('../models/data');

router.post('/save', function (req, res) {
    console.log('Requested');
    var type = req.body.type;
    var intType = req.body.intType;
    var newData = new Data();
    newData.type = type;
    newData.intType = intType;
    newData.save(function (err) {
        if (err) {
            res.json({ error: true, message: "Save failed" });
        } else {
            console.log("Save data");
            res.json({ error: false, message: "Save successfull" });
        }
    })
});

router.get('/getData',function(req,res){
    Data.find({})
})

module.exports = router;
