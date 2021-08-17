
const express = require('express')
const fs = require('fs'); 
const path = require("path");
const app = express()
const port = 80




app.get('/', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/index.html"));
})


app.get('/three.js', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/JS/three.js"));
})

app.get('/main.js', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/JS/main.js"));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

