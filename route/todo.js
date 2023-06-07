const express  = require("express")
const route = express.Router()

route.get("/",(req,res) =>{
    res.send("I M todo")
})
route.put("/:id",(req,res) =>{
    res.send("I M todo")

})
route.post("/:id",(req,res) =>{
    res.send("I M todo")

})
route.delete("/:id",(req,res) =>{
    res.send("I M todo")
 
})

module.exports= route