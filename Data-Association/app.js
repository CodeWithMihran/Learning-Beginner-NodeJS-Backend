const express = require('express');
const app = express();
const userModel= require("./models/user");
const postModel= require("./models/post");

app.get('/', (req, res)=>{
    res.send("Hey");
})

app.get('/create', async (req, res)=>{
    let user = await userModel.create({
        username: "Mihran",
        age: 18,
        email: "mihran@mail.com"
    });
    res.send(user);
})

app.get('/post/create', async (req, res)=>{
    let post = await postModel.create({
        postdata: "Hello Everyone",
        user: "699f1ed52b6ed3596639cf8c"
    })

    let user = await userModel.findOne({_id: "699f1ed52b6ed3596639cf8c"})
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(3000);