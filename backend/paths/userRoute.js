const express=require('express');
const router=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = require('../models/userSchema');

router.post('/',async(req,res)=>{
    const { name, email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Incoreect Inputs" });
    }
    try {
        const New_user = await user.findOne({ email: email });
        if (New_user) {
            return res.status(422).json({ error: "Email already exists" });
        }
        const bcryptPassword = await bcrypt.hash(password, 12);
        const User = new user({ name, email, password: bcryptPassword});
        await User.save();
        res.status(201).json({ message: "Registeration successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Somthing went wrong" });
    }
});

router.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({error:"fill all details"});
        }

        const userExists=await user.findOne({email:email});
        // console.log(userLogin);
        if(userExists){
            //compare bcrypt password and user given password
            const isMatchPassword=await bcrypt.compare(password,userExists.password);

            if(isMatchPassword){
                const token=await userExists.generateAuthToken();
            //     console.log(token);
            //cookie
            // res.cookie("jwtoken",token,{
            //     expires:new Date(Date.now()+25892000000),
            //     httpOnly:true
            // });

                res.status(200).json({ message: 'user login successful', token: token });
            }
            else{
                res.status(401).json({error:"Authentication failed"});
            }
        }
        else{
            res.status(401).json({error:"Authentication failed"});
        }
    }catch(err){
        console.log(err);
    }
});

module.exports=router;