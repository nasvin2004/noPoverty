const mongoose=require("mongoose")

const foodSchema = new mongoose.Schema({
    fname: {type:String},
    fimg:{type:String , required:true},
    ftype:{type:String},
    fexp:{type:String},
    fno:{type:Number},
    fadd:{type:String}
})

const foodModel =mongoose.model("food",foodSchema);

module.exports=foodModel

