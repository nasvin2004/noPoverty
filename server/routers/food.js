const express=require("express");
const foodModel=require("../models/food")


const foodrouter=express.Router()

foodrouter.post('/ffp',async(req,res)=>{
       
       const food=new foodModel(req.body);
       await food.save()
       res.status(201).json({message:"success"})
       
})

foodrouter.get('/ffg',async(req,res)=>{
       const response=await foodModel.find({})
       res.send(response)
})


module.exports=foodrouter;
