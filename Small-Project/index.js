const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

// Setting up parsers for Forms
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Setting up public static files
app.use(express.static(path.join(__dirname, 'public')));


// Setting up ejs files for ejs pages
app.set("view engine", "ejs");

app.get("/", function(req, res){
    fs.readdir(`./files`, function(err, files){
        res.render("index", {files: files});
    })
});

app.get("/files/:filename", function(req, res){
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
        res.render('show', {filename: req.params.filename, filedata: filedata});
    })
});

app.post("/create", function(req, res){
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")
    })
});


// Dynamic Routing using colon
// app.get("/profile/:username", function(req, res){
//     res.send(`wlecome, ${req.params.username}`);
// });

// app.get("/profile/:username/:age", function(req, res){
//     res.send(`Welcome, ${req.params.username} of Age : ${req.params.age}`);
// });

app.listen(3000, function(){
    console.log("Its running");
});

