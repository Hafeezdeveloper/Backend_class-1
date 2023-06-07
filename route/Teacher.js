const express = require("express")

const route = express.Router()

route.get("/",(req,res) =>{
    res.send("I M get Teacher")
})
route.put("/:id",(req,res) =>{
    res.send("I M put Teacher")

})
route.post("/:id",(req,res) =>{
    res.send("I M post ")

})
route.delete("/:id",(req,res) =>{
    res.send("I M delete")

})

module.exports = route