const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
})

const studentModel = mongoose.model('students',StudentSchema)

module.exports= studentModel

