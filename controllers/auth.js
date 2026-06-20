const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async(req,res)=>{

    try{

        const {name,email,password} = req.body;

        const existingUser =
        await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exists"
            });
        }

        const hashedPassword =
        await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(200).json({
            success:true,
            user
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
}

exports.login = async(req,res)=>{

    try{

        const {email,password} = req.body;

        const user =
        await User.findOne({email});

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        const checkPassword =
        await bcrypt.compare(
            password,
            user.password
        );

        if(!checkPassword){

            return res.status(401).json({
                success:false,
                message:"Wrong Password"
            });

        }

        const payload = {

            id:user._id,
            email:user.email

        };

        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
                expiresIn:"2h"
            }
        );

        res.status(200).json({
            success:true,
            token
        });

    }

    catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}