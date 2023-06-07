const express = require("express")
const app = express()
require('dotenv').config()
const mongoose = require("mongoose")
app.use(express.json())

const Studentrouter = require("./route/Student")
const Teacher = require("./route/Teacher")

app.use('/api/student',Studentrouter)
app.use('/api/teacher',Teacher)

mongoose.connect(process.env.MONGO_URI)
.then( () =>{
    app.listen(process.env.PORT, () =>{
        console.log("Database Connet and  server run succes")
    }) 

})
.catch((err ) =>{
    console.log(err)
})
