const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get('/', (req, res)=>{

// Saving cookie in frontend
    // res.cookie("name", "harsh");
    // res.send("done");

    // Encrypting the password
//     bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("sometextandsometext", salt, function(err, hash) {
//         console.log(hash);
//     });
// });

// Decrypting the password
// bcrypt.compare("sometextandsometexts", "$2b$10$cE5Idjq8bpzDEkR9Ob0j4O68sgCMl9Ju/yuVIRa7NanqsBMTmog4u" , function(err, result) {
//     console.log(result);
// });

    let token = jwt.sign({email: "user@example.com"}, "secret");
    res.cookie("token", token);
    res.send("done");
})

// Cookie will store in all the routes
// app.get('/read', (req, res)=>{
//     console.log(req.cookies);
//     res.send("read page");
// })


// To get the token(encrypted file) from the frontend at the backend
app.get('/read', (req, res)=>{
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
})

app.listen(3000);