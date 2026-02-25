// const express = require('express');
// const cookieParser = require('cookie-parser');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// app.get('/', (req, res)=>{

// // Saving cookie in frontend
//     // res.cookie("name", "harsh");
//     // res.send("done");

//     // Encrypting the password
// //     bcrypt.genSalt(10, function(err, salt) {
// //     bcrypt.hash("sometextandsometext", salt, function(err, hash) {
// //         console.log(hash);
// //     });
// // });

// // Decrypting the password
// // bcrypt.compare("sometextandsometexts", "$2b$10$cE5Idjq8bpzDEkR9Ob0j4O68sgCMl9Ju/yuVIRa7NanqsBMTmog4u" , function(err, result) {
// //     console.log(result);
// // });

//     let token = jwt.sign({email: "user@example.com"}, "secret");
//     res.cookie("token", token);
//     res.send("done");
// })

// // Cookie will store in all the routes
// // app.get('/read', (req, res)=>{
// //     console.log(req.cookies);
// //     res.send("read page");
// // })


// // To get the token(encrypted file) from the frontend at the backend
// app.get('/read', (req, res)=>{
//     let data = jwt.verify(req.cookies.token, "secret");
//     console.log(data);
// })

// app.listen(3000);


const express = require('express');
const app = express();
const userModel = require("./models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const cookieParser = require('cookie-parser');
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) =>{
    res.render("index");
});

app.post('/create', (req, res)=>{
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(password, salt, async (err, hash)=>{
            let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age
        });

        let token = jwt.sign({email}, "shhhhhhh");
        res.cookie("token", token);
        res.send(createdUser);
            })
        })
    })

app.get("/login", (req, res)=>{
    res.render("login");
})

app.post("/login", async (req, res)=>{
    let user = await userModel.findOne({email: req.body.email})
    if(!user) return res.send("something went wrong");
    bcrypt.compare(req.body.password, user.password, function(err, result){
        if(result){
            let token = jwt.sign({email: user.email}, "shhhhhhh");
            res.cookie("token", token);
            res.send(" Yes You Can Login");
        } else {res.send("something went wrong")}
    })
})

app.get("/logout", (req, res)=>{
    res.cookie("token", "");
    res.redirect('/');
})    

app.listen(3000);