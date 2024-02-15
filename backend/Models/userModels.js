const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require: true
    },
    phoneNo: {
        type: String,
        require:true,
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true }
);

module.exports = mongoose.model('User', UserModel)