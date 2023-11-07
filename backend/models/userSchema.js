const mongoose=require('mongoose');
const {isEmail} =require('validator');
const jwt = require('jsonwebtoken');

const userSchema=mongoose.Schema({
    Name:{
        type:String,
        require:[true,"can't be empty"],
    },
    email:{
        type:String,
        require:[true,"can't be empty"],
        unique:true,
        index:true,
        validate:[isEmail,"invalid email"]
    },
    password:{
        type:String,
        require:true,
    },
    Tokens:[
        {
            Token:{
                type:String,
                required:true
            }
        }
    ]
},{timestamps:true})

userSchema.methods.generateAuthToken = async function(){
    try{
        let token=jwt.sign({ _id:this._id }, process.env.SECRET_KEY);
        this.Tokens=this.Tokens.concat({Token:token});
        await this.save();
        // return token;
    }catch(err){
        console.log(err);
    }
}
const user=mongoose.model("user",userSchema);
module.exports=user;