const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB)
        console.log('Connection to database success')
    } catch (error) {
        console.log('Not connected')
    }
}

module.exports = connectDB;