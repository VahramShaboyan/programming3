var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name", function(req, res){
   res.send("<h1>Hello world name</h1>");
});
app.get("/youtube", function(req, res){
   res.redirect("https://www.youtube.com/");
});
app.get("/search/:something", function(req, res){
    var something = req.params.something;
   res.redirect("https://www.google.com/search?q=" + something);
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/*", function(req, res){
    res.send("<h1>404 error</h1>")
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
