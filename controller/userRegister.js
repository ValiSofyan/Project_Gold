const express = require("express");
const userRegister = express.Router ()



userRegister.post("/register",(req,res)=>{
    const {userName,password} = req.body
    
    const result =`Register dengan akun ${userName} dan ${password}`;
    res.status(200).json(result)
})

userRegister.post("/login",(req,res)=>{
    const { userName , password}= req.body

    const result =`Login dengan akun ${userName} dan ${password}`;
    res.status(200).json(result)
})


module.exports = userRegister