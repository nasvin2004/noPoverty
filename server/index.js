const express=require("express")
const mongoose=require("mongoose")
const cors =require("cors")
const foodrouter=require("./routers/food")
const clothrouter=require("./routers/cloth")

const router=express()
router.use(express.json())
router.use(cors())
router.use("/food",foodrouter)
router.use("/cloth",clothrouter)
async function connect(){
        await mongoose.connect("mongodb+srv://nasvin22:SilverBeach@recipes.zarppgi.mongodb.net/noPoverty?retryWrites=true&w=majority&appName=recipes")
        console.log("Connected")
}

connect()

const port= 5000
router.listen(port,()=>console.log(`${5000} connected`))

