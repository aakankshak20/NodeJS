const mongoose=require('mongoose');



mongoose.model("Inventory",{
    
   name:{
       type:String,
       required:true
   },
   quantity:{
       type:Number,
       required:true
   }
});