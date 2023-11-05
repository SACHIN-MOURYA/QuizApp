const express=require("express");
const http=require("http");

const app=express();
const server=http.createServer(app);

const PORT=5000;

app.get('/',(req,res)=>{
    res.send("server running");
});

server.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
});