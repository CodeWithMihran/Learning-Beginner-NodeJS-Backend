const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
     res.send("It is running.");
});

app.listen(3000, function(){
    console.log("Its running");
});