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
    // TODO: code with db here
})

app.get("/", function(req, res) {
    res.render("reja");
})


module.exports = app;
