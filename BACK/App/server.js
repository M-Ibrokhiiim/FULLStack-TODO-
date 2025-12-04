import express from 'express'

const server = express()

// GET
server.get('/home',(req,res)=>{
    res.json({msg:'You are in home page!'})
})

server.listen(3000,()=>{
    console.log('Server on PORsT:3000')
})