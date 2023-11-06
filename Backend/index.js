var express=require("express");
const connectDb = require("./db");

var app = express();
const port = 4000;
connectDb();

app.get("/",(req,res)=>{
    res.send("hello express");
});

app.get("/sayhi",(req,res)=>{
    res.send("hi node");
});

app.listen(port,()=>{
    console.log(`apps listening on port ${port}`);
});