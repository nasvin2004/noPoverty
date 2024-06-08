const mongoose=require("mongoose")

const clothSchema = new mongoose.Schema({
    ctype: {type:String},
    cimg:{type:String , required:true},
    gender:{type:String},
    size:{type:String},
    quantity:{type:Number},
    contact:{type:Number},
    area:{type:String}
})

const clothModel =mongoose.model("cloth",clothSchema);

module.exports=clothModel