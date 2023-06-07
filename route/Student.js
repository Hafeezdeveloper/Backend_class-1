const express = require("express")
const route = express.Router()

const studentModel = require('../Models/StudentModel')
const {sendResponse} = require("../Helper/helper")

route.get("/", async(req,res) =>{
    try{
        const result = await  studentModel.find()
        if(!result){
            res.send(sendResponse(false,null,"No Data Found")).status(404)
        }else{
            res.send(sendResponse(true,result)).status(404)
        }

    }catch(e){
        console.log(e)
        res.send(sendResponse(false)).status(400)

    }
})
route.post("/", async (req,res) =>{ 
    try{

        let {firstName,lastName,contact} = req.body
        let arrNew = []
        // res.send(req.body)
        if(!firstName){
            arrNew.push("Required Name")
            return
        }
        if(!lastName){
            arrNew.push("Required last Name")
            return
        }
        if(!contact){
            arrNew.push("Required contact")
            return
        }

        if(arrNew > 0){
            res.send(sendResponse(false,arrNew,null,"All Field Requireds")).status(400)
            return
        }else{
            let obj = {firstName,lastName,contact}
            let student = new studentModel(obj)
            await student.save()
            if(!student){
                res.send(sendResponse(400,null,"not send data")).status(400)
            }else{
                res.send(sendResponse(400,null,"Data send Successfully")).status(200)
            }
        }

    }catch(e){
        console.log(e)
    }
        
})

route.put("/:id",(req,res) =>{
    res.send("I M put")

})
route.delete("/:id",(req,res) =>{
    res.send("I M delete")
 
})

module.exports = route