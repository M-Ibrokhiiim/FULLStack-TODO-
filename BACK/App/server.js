import express from 'express'
import url from 'url'
import cors from 'cors'
import path from 'path'
import fs from 'fs/promises'


// FS
const _fileName = url.fileURLToPath(import.meta.url);
const _dirName = path.dirname(_fileName);



const server = express()
server.use(cors())

server.use(express.urlencoded({ extended: true }));
server.use(express.json())

// GET
server.get('/tasks',async(req,res)=>{
    const tasks = await fs.readFile(path.join(_dirName,'DATA','TASKS.json'),'utf8')
    res.status(200).send(tasks)
})
// POST
server.post('/newTask',async(req,res)=>{
    const DB =  await fs.readFile(path.join(_dirName,'DATA','TASKS.json'),'utf8');
    const arrivalTask = req.body;
    const tasks = JSON.parse(DB);

    try{
       const newTask = {name:arrivalTask.name};

       tasks.forEach((task)=>{
        if(task.name === arrivalTask.name){
            res.status(409).json({success:false,msg:'Task already exist!'})
            throw new Error('Task already exist!')
        }
      })
        
        tasks.push(newTask);
        await fs.writeFile(path.join(_dirName,'DATA','TASKS.json'),JSON.stringify(tasks)+"\n");
        res.json({success:true,msg:'Task successfully added!'});
    }catch(err){
       console.log(err);
    } 
})

server.listen(3000,()=>{
    console.log('Server on PORT:3000')
})