const express = require("express");
const app = express();
const path = require('path');

// Setting up parsers for Forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Setting up public static files
app.use(express.static(path.join(__dirname, 'public')));


// Setting up ejs files for ejs pages
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});


// Dynamic Routing using colon
app.get("/profile/:username", function(req, res){
    res.send(`wlecome, ${req.params.username}`);
});

app.get("/profile/:username/:age", function(req, res){
    res.send(`wlecome, ${req.params.username} of Age : ${req.params.age}`);
});

app.listen(3000, function(){
    console.log("Its running");
});

