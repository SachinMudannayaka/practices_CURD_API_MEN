require ('dotenv').config();
const express=require("express");
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const cors=require('cors');
const app=express();
const postRoutes= require('./routes/posts');
app.use(cors());
app.use(bodyParser.json());

app.use(postRoutes);

app.get('/',(req,res)=>{
    res.send("Server is Running!!!!");
})
//const PORT=process.env.PORTenv;
//const DBURL=process.env.DBURLenv;
//const PORT=8005;

const PORT1=process.env.PORT;
const DBURL=process.env.DBURL;

mongoose.connect(DBURL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log(`DATABASE SUCCESSFULLY CONNECTED`)})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT1,()=>{
    console.log(`SERVER IS RUNNING ON : ${PORT1}`);
})