const express=require('express')
const bodyparser=require('body-parser')
const app=express()

const portNumber =process.argv[2]

app.use(bodyparser.urlencoded({extended:false}))

app.post('/form',(req,res)=>{
    let reverse = req.body.str.split('').reverse().join('')
    res.end(reverse)
})

app.listen(portNumber)