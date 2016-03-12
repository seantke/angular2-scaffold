var express = require('express');
var app = express();

app.use("/",express.static(__dirname));

app.all("*", function(req, res){
  res.redirect("index.html");
});

app.listen(3000, function(){
  console.log("Listening on 3000");
})
