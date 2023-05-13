const { hassPass, comparePass } = require('../helpers/userHelper')
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken')

//create user
module.exports.createUser = async(req, res) => {
    try {
        const {email, password} = req.body
        //validations
        if(!email || !password) {
            return res.json({
                message: 'Fill all data'
            })
        }
        //check existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser) {
            return res.json({
                message: 'User already registered'
            })
        }
        //hash
        const hash = await hassPass(password)
        const user = await userModel({...req.body, password: hash}).save()
        res.status(200).json({
            success: true, message: 'User registered successfully', user
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when creating user"
        })
    }
}

//login user
module.exports.loginUser = async(req, res) => {
    try {
        const {email, password} = req.body
        //validations
        if(!email || !password){
            return res.json({
                message: 'Enter email or password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({
                message: 'Invalid email or password'
            })
        }
        //compare password
        const match = await comparePass(password, user.password)
        if(!match) {
            return res.json({
                message: 'Password not matched'
            })
        }
        //generate token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.status(200).json({
            success: true, message: 'Login successfull', user:{email: user.email}, token
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false, message: "Something wrong when trying to login"
        })
    }
}