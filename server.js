const http =require('http');
const express = require('express');
const app=express();
const port = process.env.PORT || 3000;
const  mongoose = require('mongoose');
var result = require('./schema');

//server start
app.listen(port,() =>{
    console.log("Started")
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//mongo DB connection
const url = 'mongodb://localhost/test_report';
mongoose.connect(url, {useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log("mongodb connected"));
mongoose.connection.on('error', (err) => console.log(err));


// http://localhost:3000/getall
// get all reports
app.get('/getall',(req,res,next) => {

    result.find({}, (err, data) => {
        if(err) res.status(500).send(err);
        if(data) res.status(200).send(data);
    });
});

// http://localhost:3000/report?SivakumarA-VISUALBI-D060
app.get("/report",(req,res,next) =>{
    
    const employeeId = req.query.userId ;
    result.find({employeeId: employeeId}, (err, data) => {
        if(err) res.status(500).send(err)
        if(data) res.status(200).send({data})
    })
});

