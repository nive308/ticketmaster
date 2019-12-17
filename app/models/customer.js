const mongoose=require("mongoose")
const Schema=mongoose.Schema
const validator=require('validator')

const customerSchema = new Schema({
    name: {
        type: String, 
        required: true 
    },
    email: {
        type: String ,
        required:true,
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return 'invalid email'
            }}
            },
        
    mobile:{
        type: String, 
        required: true,
        minlength: 10, 
        maxlength: 10   
     }
     })

     const Customer=mongoose.model('Customer',customerSchema)

     module.exports=Customer