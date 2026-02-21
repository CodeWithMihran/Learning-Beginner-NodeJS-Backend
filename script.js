// File Sysytem Codes

// const fs = require('fs');


// To make a file with some data or text

// fs.writeFile("first.txt", "This is the data", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// To appemd the file

// fs.appendFile("first.txt", "\nAuthor - Md Mihran Sohail", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// To rename the file

// fs.rename("first.txt", "Data.txt", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })


// To copy the file

// fs.copyFile("Data.txt", "./copy/Data1.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("Done");
// })


// To Remove the file

// fs.unlink("./copy/Data1.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("Removed");
// })


// To Remove the folder

// fs.rmdir("./copy",{recursive: true}, function(err){
//     if(err) console.error(err.message);
//     else console.log("Removed");
// })

// fs.rm("./copy",{recursive: true}, function(err){
//     if(err) console.error(err.message);
//     else console.log("Removed");
// })


// HTTP Codes

// const http = require("http");

// const server = http.createServer(function(req, res){
//     res.end("Hello World");
// })

// server.listen(3000);

console.log("Hello Wolrd");