var express = require('express');
var router = express.Router();
var Data = require('../models/data');

router.get('/save', function (req, res) {
    console.log('Requested');
    var type = req.body.type;
    var newData = new Data();
    newData.type = type;
    newData.save(function (err) {
        if (err) {
            res.json({ error: true, message: "Save failed" });
        } else {
            console.log("Save data");
            res.json({ error: false, message: "Save successfull" });
        }
    })
});

module.exports = router;