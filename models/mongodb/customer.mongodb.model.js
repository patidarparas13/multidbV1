const mongoose = require("mongoose")
let userSchema = mongoose.Schema;
let customerSchema = new userSchema({
        name:{
        type:String,
        
    }  , 
    phone_number:{
        type:Number,
        
    },
    
    email:{
        type:String,
       
    }
    
    }, { collection: 'test' })
module.exports=mongoose.model('customer', customerSchema)