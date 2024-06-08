const express=require("express");
const clothModel=require("../models/cloth")


const clothrouter=express.Router()

clothrouter.post('/cfp',async(req,res)=>{
       
       const cloth=new clothModel(req.body);
       await cloth.save()
       res.status(201).json({message:"success"})
       
})

clothrouter.get('/cfg',async(req,res)=>{
       const response=await clothModel.find({})

       res.send(response)
})

module.exports=clothrouter;