
var express = require('express')
app = express()
var bodyParser = require("body-parser")
var mongoose = require("mongoose");

mongoose.connect("mongodb://danny:Swoosh1991@ds151602.mlab.com:51602/practiceserver" , { useNewUrlParser: true });

port = process.env.PORT || 3000

app.set("view engine", "ejs");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



// var blogSchema = new mongoose.Schema({
//     title:String,
//     image:String,
//     body:String,
//     created:{type: Date, default: Date.now}
// });


var Blog = mongoose.model("Blog", blogSchema);



app.get('/', function(req,res){
  res.render("home")

})




app.get('/blogs', function(req,res){
  res.render("blogs")
})




app.listen(port, ()=>{
  console.log("App runing on port :" + port)
})
