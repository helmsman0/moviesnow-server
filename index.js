//automatically load env file to our app
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import connection file
require('./db/connection ')

//import router
const router = require('./routes/router')

//create server app
const server = express()

//to store port number
const PORT = 3000

//use cors express and routesin server app
server.use(cors())
server.use(express.json())
server.use(router)
//use 

//route
// server.get('/',(req,res)=>{
//     res.status(200).json("Movies server starting...")
// })

//run app
server.listen(PORT,()=>{
    console.log(`movies server starting at port ${PORT}`);
})