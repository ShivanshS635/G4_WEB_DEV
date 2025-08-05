const userModel = require("../models/userModel.js")
const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRETKEY;

const generateToken = (userData) => {
    return jwt.sign({data : userData} , secretKey);
}

const registeruser = async (req , res) => {
    const {firstName , lastName , emailId , password} = req.body;

    //validations
    if(!firstName || !emailId || !password){
        res.status(400).send({message : "Please Add All Mandatory Fields"});
    }

    //check the user exists or not
    const userExists = await userModel.findOne({emailId});
    if(userExists){
        res.status(400).send({message : "User Already Exixts"});
    }

    //Create New user
    const newUser = await userModel.create({
        firstName,
        lastName,
        emailId,
        password
    });

    await newUser.save();

    const token = generateToken(newUser);

    res.status(200).send({massage : "New User Registered Sucessfully" , token : token});
}

const loginUser = async (req , res) => {
    const {emailId , password} = req.body;

    //VALIDATION
    if(!emailId || !password){
        res.status(401).send({message : "User Does not Exists!"});
    }

    const userExists = await userModel.findOne({emailId});

    if(!userExists){
        res.status(401).send({message : "No User Found!"});
    }

    if(req.body.password != userExists.password){
        res.status(401).send({message : "Invalis Password"});
    }

    const token = generateToken(userExists);

    res.status(200).send({message : "Logged In Sucessfully!" , token});
}

module.exports = {registeruser , loginUser}