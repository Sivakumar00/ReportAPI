const http =require('http');
const express = require('express');
const app=express();
const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log("Started")
});

app.get("/",(req,res,next) => {
    res.status(200).json({
        something: "something"
    });
});