const express = require('express');
const https = require('https');
const { response } = require('express');

const app = express();

const hostname = "127.0.0.1";
const port = 3000;

// app.use(express.static("public"));
app.use("/public", express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT || port, ()=>{
    console.log(`Listening at http://${hostname}:${port}`);
});