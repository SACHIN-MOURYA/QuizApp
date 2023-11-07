const express=require("express");
const http=require("http");
const dotenv=require('dotenv');
const userRouter = require('./paths/userRoute');
const cors = require('cors');
const user = require('./models/userSchema');

const app=express();
const server=http.createServer(app);

dotenv.config({path:'./config.env'});
require('./database/db');

const PORT=5000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/users',userRouter);

// app.delete('/logout', async(req, res)=> {
//     try {
//       const {_id, newMessages} = req.body;
//       const User = await user.findById(_id);
//       await User.save();
//       res.status(200).send();
//     } catch (e) {
//       console.log(e);
//       res.status(400).send()
//     }
//   })

app.get('/',(req,res)=>{
    res.send("server running");
});


server.listen(PORT,()=>{
    console.log(`server listening at port ${PORT}`);
});