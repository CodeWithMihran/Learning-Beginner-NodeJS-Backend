const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res) =>{
    res.send("Hey");
})

app.get('/create', async (req, res) =>{
    let createduser = await userModel.create({
        name: "Rohit",
        email: "rohit@gmail.com",
        username: "rohit"
    })
    
    res.send(createduser);
})

app.get('/update', async (req, res) =>{
    let updateduser = await userModel.findOneAndUpdate({username: "mihran"}, {name: "Md Mihran Sohail"}, {new: true});
    res.send(updateduser);
})

app.get('/read', async (req, res) =>{
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async (req, res) =>{
    let deleteduser = await userModel.findOneAndDelete({username: "rohit"});
    res.send(deleteduser);
})

app.listen(3000);