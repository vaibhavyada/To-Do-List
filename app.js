// jshint version:6
const express = require("express");
const app =express();
const date=require(__dirname+"/date.js");

var items=["Upload Assingment","Finish DA","Sleep"];
let workitems=[];

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
////

app.use(express.static("public"));
app.set('view engine', 'ejs'); // using EJS

app.get("/",function(req,res){
    let day = date.getDay();
    res.render("list",{listtitle:day,ITEM:items}); // list is the name of our EJS pagde
});

app.post("/",function(req,res){
    var item = req.body.entry;
    if(req.body.list === "work"){
        workitems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
}});
app.get("/work",function(req,res){
    res.render("list",{listtitle:"work list",ITEM:workitems});
})

app.get("/about",function(req,res){
    res.render("about");
})

app.listen(3000,function(){
    console.log("Chalu ho gaya");
});