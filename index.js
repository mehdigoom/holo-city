
const express = require('express')
const fs = require('fs'); 
const path = require("path");
const app = express()
const port = 80

//////////------------------------ ALL PAGES---------------------------------------/////

app.get('/', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/index.html"));
})
//////////------------------------ ALL JS ---------------------------------------/////
app.get('/three.js', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/JS/three.js"));
})

app.get('/main.js', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/JS/main.js"));
})

app.get('/GLTFLoader.js', (req, res) => {
    
    
    res.sendFile(path.join( __dirname, "Pages/JS/examples/jsm/loaders/GLTFLoader.js"));
})
//////////------------------------ ALL MODELS ---------------------------------------/////


app.get('Lucy.glb', (req, res) => {
    
    
    res.sendFile(path.join( __dirname, "Pages/Models/Lucy.glb"));
})


app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

