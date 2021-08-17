
const express = require('express')
const fs = require('fs'); 
const path = require("path");
const app = express()
const port = 80




app.get('/', (req, res) => {

    
    res.sendFile(path.join( __dirname, "Pages/index.html"));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

