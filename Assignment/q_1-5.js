
const express=require('express');
const app=express();
const bodyParser = require('body-parser');

app.use(express.json());


const mongoose =require('mongoose');

require("./q11")
const Inventory=mongoose.model("Inventory")



mongoose.connect("mongodb+srv://test98:test98@cluster0.80ol3.mongodb.net/bookservice?retryWrites=true&w=majority",{useNewUrlParser: true,useUnifiedTopology:true},() =>{
    console.log("Databse is connected");
});

app.get(('/'),(req,res) =>{
    res.send('This is our inventory service!');
})


app.post('/inventory',(req,res) =>{
  
    var newInventory = {
        name:req.body.name,
        quantity:req.body.quantity
    }
    

    var inventory = new Inventory(newInventory);
    inventory.save().then(() =>{
        console.log("New item created")
    }).catch((err) =>{
        if(err){
            throw err;
        }
    })
    res.send("A new item created with success")

})

app.get('/inventory', (req,res) =>{

    Inventory.find().then((item) => {
    res.json(item)
 }).catch(err =>{
     if(err){
         throw err
     }
 })

})



app.get('/inventory/:name',(req,res) =>{
    
   
    Inventory.findOne({name:req.params.name}).then((item) =>{
        
        if(item){
            
            res.json(item)
        }else{
            res.sendStatus(404);
        }

    }).catch(err =>{
        if(err){
            throw err;
        }
    })

})

app.delete('/inventory/:name',(req,res) =>{
 
    const name={name:req.params.name}
    Inventory.deleteOne(name).then( () =>{
        res.send("Item removed");
    }).catch(err =>{
        if(err){
            throw err;
        }
    })

})

app.delete('/inventory',(req,res) =>{
 
    const name={name:req.params.name}
    Inventory.remove().then( () =>{
        res.send("Item removed");
    }).catch(err =>{
        if(err){
            throw err;
        }
    })

})

// app.put('/inventory/:name',(req,res) =>{
 
//     var newInventory = {
//         name:req.body.name,
//         quantity:req.body.quantity
//     }
     
//     var inventory = new Inventory(newInventory);

//     Inventory.findOneAndUpdate({name:req.params.name},inventory).then(() =>{
//         res.status(201).json({
//             message:'Item Updated'
//         });
//     }).catch((error) =>{
//         res.status(400).json({
//             error:error
//         });
//     });

// });

app.put('/inventory/:name',(req,res) =>{
 
    const name={name:req.params.name}
    Inventory.updateOne(name,req.body).then( () =>{
        res.send("Item updated");
    }).catch(err =>{
        if(err){
            throw err;
        }
    })

})

app.put('/inventory',(req,res) =>{
 
    const name={name:req.params.name}
    Inventory.updateMany(name,req.body).then( () =>{
        res.send("Item updated");
    }).catch(err =>{
        if(err){
            throw err;
        }
    })

})


app.listen(8081,() =>{
    console.log('.....Port is listing');
});
