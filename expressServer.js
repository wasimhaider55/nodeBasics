const express = require("express");
const app = express();


app.get("/" , (req, res) =>{
    res.send("<h1> welcome to the home page <h1>")
})
app.get("/about" , (req, res) =>{
    res.send("<h2> welcome to the about page <h2>")
})



app.listen("3001" , () => {
    console.log("server is running on the port 3001");
})