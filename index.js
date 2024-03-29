import  express  from "express";
import dotenv from 'dotenv';
import { authRouter } from "./router/userAuth.router.js";
dotenv.config();

import connectDB from './connection.js'

const server=express();

// parse the json string in the request body 
server.use(express.json());

//router
server.use('/',authRouter);


connectDB().then(() => {
    // Start the server
    server.listen(8080, (err) => {
      if(err){
        console.log(err);
      }
      console.log('Server is running on port 8000');
    });
  }).catch((err) => {
    console.error('Failed to connect to the database', err);
  });