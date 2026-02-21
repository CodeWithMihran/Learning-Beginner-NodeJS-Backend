const fs = require('fs');

// fs.writeFile("first.txt", "This is the data", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

// fs.appendFile("first.txt", "\nAuthor - Md Mihran Sohail", function(err){
//     if(err) console.error(err);
//     else console.log("Done");
// })

fs.rename("first.txt", "Data.txt", function(err){
    if(err) console.error(err);
    else console.log("Done");
})