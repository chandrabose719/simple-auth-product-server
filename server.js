const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = require('./app');

const port = process.env.PORT || 3000;
const server = http.createServer(app);

const db = 'mongodb://simple-auth-product:simple-auth-product123@ds039088.mlab.com:39088/simple-auth-product';
const dbArgs = { useNewUrlParser: true, useUnifiedTopology: true }

// Run server
server.listen(port, function(){
    console.log('Server listening on ' + port);
});

// Connect Database
mongoose.connect(db, dbArgs, function(err){
    if(err) {
        console.log('Some problem with the connection ' +err);
    }else{
        console.log('Database is connected!');
    }
});


