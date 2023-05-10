const http = require("http");

const app = http.createServer((req, res) =>{
   // Routes 
   if(req.url == "/"){
    res.write("Home page........");
    res.end();
   } 
   if(req.url == "/about"){
    res.write(" About  page ......")
    res.end();
   }

})


app.listen("3001" , "localhost", () => {
    console.log("server is running on the port 3001");

})