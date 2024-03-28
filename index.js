import  express  from "express";
import dotenv from 'dotenv';

dotenv.config();

const server=express();


server.get('/',(req,res)=>{
    res.send('Hello server');
})

server.listen(8080,(err)=>{
if(err){
console.log(err);
}
console.log('Server is running on port 8000');
})