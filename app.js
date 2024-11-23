console.log('Web Serverni boshlash');
const express = require("express"); 
const app = express(); 

//MongoDB chaqirish
const db = require("./server").db();

// *****1 - Kirish codelari*******
app.use(express.static("public")); app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ********2 - Sessionga bogliq bolgan codelar*******
// ********3 - Views ga bogliq codelar*********

app.set("views", "views");
app.set("view engine", "ejs"); 

// *****4 - Rooting ga bogliq codelar********
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item');
    console.log(req.body);
    // res.end("success");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        if(err) {
            console.log(err);
            res.end("Something went wrong")
        } else {
            res.end("Successfully added")
        }
    })
})

app.get("/", function(req, res) {
    console.log('user entered /');
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            // console.log(data);
            res.render("reja", { items: data });
        }
    });
})


module.exports = app;
