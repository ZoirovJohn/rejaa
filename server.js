console.log('Web Serverni boshlash');
// express - bu nodeJS frameworki
const express = require("express"); // express module dan export qilingan express function
const app = express(); // app - bu instinct, obj
const http = require("http"); // core module

// *****1 - Kirish codelari*******
// Expressga kirib kelekan malumotlaga bogliq bolgan kodlar yoziladi

app.use(express.static("public")); // harqande wrobserdan kirib kelekan request la ucun, faqat public folderi ochiq dgani
// chrome expressga request qsa, public folder ni clientlaga ochib berebmz. kn cali styling sheta joylashadi: css, image
app.use(express.json()); // kegan json formatdegi data ni obj ga ogirib beradi
// client va webserver la orasidagi malumot, json format korinishida boladi
app.use(express.urlencoded({extended: true}));
//html da form request(traditional request qilish instrument) i bor, htlm da POST qilingan narsalani qabul qilib oladi tepadegi kod

// ********2 - Sessionga bogliq bolgan codelar*******
// ********3 - Views ga bogliq codelar*********

// Frontend qurishda  1- Traditional usul, BSSR(Backed server side rendering)
// 2 - usul single page app

// backenda view yasemz(frontend). Bu traditional usul hisoblanadi. HTML yasab client ga yuboramiz
app.set("views", "views");
// 1- views: odatiy setting name, key. Express .ejs fileni views folder dan qidiradi, by default "views" dan qidiradi aslidayam
// 2- views: folder name

// ejs(embedded js)dan foydalanb backend ni ichida frontend ni yasemiz
app.set("view engine", "ejs"); 
// view engine - html ni data bn qoshib generate qberadigan template engine

// *****4 - Rooting ga bogliq codelar********
// app.get("/hello", function(req, res) {
//     res.end(`<h1>HELLO WORLD by Thomas</h1>`);
// });

// app.get("/gift", function(req, res) {
//     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });


//get - databasedan malumotni olish uchun, post - ozi bn malumot obkeb database ga yozadi
app.post("/create-item", (req, res) => {
    console.log(req.body);
    console.log(req);
    res.json({ test: "success"} );
})

app.get("/", function(req, res) {
    res.render("harid.ejs");
})

// request 3 qism: 1.url, 2. http request header(boshi), 3.body



const server = http.createServer(app);
let PORT = 3000; // 0-65
// port ni ehsitamiz
server.listen(PORT, function() {
    console.log(`The server is running successfully on port: ${PORT}`)
})