const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/connection');
const UserRoutes = require('./Routes/userRoutes');

dotenv.config();

const app = express();


const cors = require('cors');
app.use(cors());


connectDB()

app.use(express.json());


app.use('/api/user', UserRoutes);


const PORT = process.env.PORT;

app.listen(PORT, console.log('Connected to LOCALHOST'));