
const mongoose =require('mongoose');

var Schema=mongoose.Schema;

var employeeSchema =new Schema({
    fullname:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contact:{
        type:String,
        unique:true,
        required:true
    },
    city:{
        type:String,
        unique:true,
        required:true
    }

});

module.exports=mongoose.model('Employee', employeeSchema);