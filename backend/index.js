const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/connection');
const UserRoutes = require('./Routes/userRoutes');
const UploadRoutes = require('./Routes/uploadRoutes')

dotenv.config();

const app = express();


const cors = require('cors');
app.use(cors());

global.__basedir = __dirname;


connectDB()

app.use(express.json());

// User Route for register and login user
app.use('/api/user', UserRoutes);

// File upload and download 
app.use('/api', UploadRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log('Connected to LOCALHOST'));