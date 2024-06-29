const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const {connect} = require("mongoose");
const connectDB = require("./config/db");

//env config
dotenv.config();

//route import
const userRouters = require("./routes/userRoutes")
const blogRouters = require("./routes/blogRoutes")

//mongodb connection
connectDB();

//rest object
const app = express()

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/v1/user', userRouters)
app.use('/api/v1/blog', blogRouters)

//Port
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080, ()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port on ${PORT}`.bgCyan.white);
})