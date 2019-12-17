const mongoose=require("mongoose")
const Schema=mongoose.Schema
//const validator=require('validator')

const ticketSchema=new Schema({
    createdAt:{
        type:Date,
        default:Number(new Date())
    },
    name:{
        type:String,
        required:true
       },
    // customerId:{
    //     type:Schema.Types.ObjectId,
    //     required:true,
    //     ref:'Customer'},

    department:{
        type:Schema.Types.Object,
        required:true,
        ref:'Department'},
       
    // employeeId:{
    //     type:[Schema.Types.ObjectId],
    //     required:true,
    //     ref:'Employee'},

        
        priority:{
               type:String,
               required:true
           },
        message:{
               type:String,
               required:true
           },
        isResolved:{
               type:Boolean,
               default:false,
               
           },
        code:{
               type:String,
               required:true
           }
})
const Ticket=mongoose.model('Ticket',ticketSchema)

module.exports=Ticket