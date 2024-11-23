const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://zoirovjohn:sMpaXWDwVGW8UktI@cluster0.ywejv.mongodb.net/";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, (err, client) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("MongoDB connection succeed");
        // console.log(client);
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`)
        })
    }
});

