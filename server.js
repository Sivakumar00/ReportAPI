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

//mongo DB connection
const url = 'mongodb://localhost/test_report';
mongoose.connect(url, {useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log("mongodb connected"));
mongoose.connection.on('error', (err) => console.log(err));



// get all reports
app.get("/getall",(req,res,next) => {

    result.find({}, (err, data) => {
        if(err) res.status(500).send(err);
        if(data) res.status(200).send(data);
    })
});

app.get("/:userid",(req,res,next) =>{
    
});