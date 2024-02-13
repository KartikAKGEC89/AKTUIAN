const express = require('express');
const app = express();
const dotenv = require('dotenv');
const Userroutes = require('./Routes/userRoutes');
const connectDB = require('./Config/connection');


dotenv.config();

connectDB()

const PORT = process.env.PORT;

app.listen(PORT, console.log('Connected to LOCALHOST'));


app.use('/api/user', Userroutes)