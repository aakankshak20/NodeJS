const { request } = require('express');
var express=require('express');
var app=express();

app.use(express.json());

let list =[{
    "id":1,
    "username":"abc",
    "price":500
},
{
    "id":2,
    "username":"xyz",
    "price":900
},
{
    "id":3,
    "username":"asd",
    "price":100
}
]


app.get('/',function(req,res){
    res.send('here is your list');
});

app.get('/item',function(req,res){
    res.json(list);
});

app.get('/items/:id',function(req,res){
    const id= Number(req.params.id);
    const getprice = list.find((item) => item.id === id);
    
    if(id){
        res.json(getprice);
    }else{
        res.status(500).send('List item is not present')
    }
})

app.post('/items',function(req,res){
    const newItem = req.body;
    list.push(newItem);
    res.json(list)
});


app.delete('/items/:id', function(req,res){
    const itemId= Number(req.params.id);
    const newItem = list.filter((item) => item.id != itemId);

    if(newItem){
        list=newItem;
        res.send(list);
    }else{
        res.status(500).send('given item is not in the list');
    }
});

app.patch('/item/:id',function(req,res){
    const newItemU = req.body;
    const id= Number(req.params.id);
    const arr=list.filter((item) => item.id === id)
       arr.push(newItemU);
    //  list.update({ id: id},{$set:newItemU}); 
});

// console.log(arr);


app.listen(3000, () =>{
    console.log('running.....');
})