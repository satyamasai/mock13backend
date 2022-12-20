const mongoose = require("mongoose");

const scoreSchema = mongoose.Schema({
   score:{type:String, required:true},
    email:{type:String, required:true}
},{timestamps:true}) 

const scoreModel = mongoose.model("score" , scoreSchema);

module.exports={
    scoreModel
}