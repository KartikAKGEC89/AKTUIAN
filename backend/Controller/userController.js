const express = require('express');
const User = require('../Models/userModels');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs')

// http://localhost:3000/api/user
const userRegister = asyncHandler( async (req, res) => {
    const { name, email, phoneNo, password } = req.body

    const userExist = await User.findOne({ email })
    
    if (userExist) {
        res.status(400).json('User Already Register')
    } else {
        const user = await User.create({
        name: name,
        email: email,
        phoneNo: phoneNo,
        password: bcrypt.hashSync(password,10)
    })

    if (user) {
        res.status(201).json('User Register Successfully..')
    } else {
        res.status(404).json('Error')
    }   
    }

})


// http://localhost:3000/api/user/login
const userLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compareSync(password, user.password))) {
        res.status(200).send('User login success')
    } else {
        res.status(404).send('Unauthorized')
    }
})

module.exports = { userRegister, userLogin };