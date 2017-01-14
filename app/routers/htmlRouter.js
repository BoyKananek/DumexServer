var express = require('express');
var router = express.Router();
var Data = require('../models/data');
var waitUntil = require('wait-until');

router.get('/',function(req,res){
    var type101;
    var type201;
    Data.count({intType: 101},function(err,result1){
        type101 = result1;
        Data.count({intType: 201},function(err,result2){
            type201 = result2;
            Data.count({intType: 301},function(err,result3){
                type301 = result3;
                console.log('Type 101 :' +type101);
                console.log('Type 201 :'+ type201);
                console.log('Type 301 :'+ type301);
                res.render('index',{data1: type101, data2 : type201, data3:type301});
            })
        })
    });
    //res.render('index',{data1: type101, data2 : type201, data3:type301});
});

module.exports = router;
