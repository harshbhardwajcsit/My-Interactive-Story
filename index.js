/**
 * Created by samsung on 12-Mar-17.
 */

var express=require("express");

var app=express();
app.use(express.static("public"));
var port=process.env.PORT || 3002;

app.listen(port,function(req,res){

    console.log("server started ");})
