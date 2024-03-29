import { Router } from "express";
import { getHashPassword,generateSalt } from "../service/userAuth.services.js";
import {User} from '../models/user.model.js';

const authRouter = Router();

authRouter.post('/signUp', async (req, res) => {

      const {name,lastname,email, password} = req.body;
        console.log(name,lastname,email,password);

        try{
            const salt = generateSalt();

            console.log('salt',salt);
    
            const hashPassword = getHashPassword({password,salt});
            
            console.log('hashPassword',hashPassword);

            const user=await User.create({name,lastname,email,password:hashPassword,salt});
            console.log('user',user);

            res.status(200).send('user created successfully');
        }
    
        catch(error){
            res.status(400).send(error);
        }
  
});


authRouter.get('/signIn', (req, res) => {

    try{
    const {email,password}=req.body;
    }

    catch{

    }
    res.status(200).send('Sign In Route');
});


export {authRouter};