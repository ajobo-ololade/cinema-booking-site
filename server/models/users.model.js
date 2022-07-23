const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    email:{
        require:true,
        type:String,
    },
    fullname:{
        require:true,
        type:String,
    },
    mobileNumber:{
        require:true,
        type:String,
    },
    seat:{
        require:true,
        type:String,

    },
    category:{
        require:true,
        type:String,
    },
    amountPaid:{
        require:true,
        type:String,
    },
    cinema:{
        require:true,
        type:String,
    },
    date:{
        type:Date,
        default:Date.now

    },
    package:{
        require:true,
        type:String,
    }


})
let userModel = mongoose.model("user_tb",userSchema)
module.exports=userModel