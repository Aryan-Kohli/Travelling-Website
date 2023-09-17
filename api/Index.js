const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const User = require("./Models/UserModel");
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
dotenv.config();
const jwtsecret = "nosecret";
app.use(express.json());
const bcryptsalt = bcrypt.genSaltSync(10);

app.use(cookieParser());
mongoose.connect(process.env.MONGO_URL);
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))
app.post('/register',async (req,resp)=>{
    const {name, email,password}= req.body;
    const userdoc = await User.create({
        name,email,password : bcrypt.hashSync(password,bcryptsalt)
    })
    resp.json(userdoc);
})
app.post('/login',async (req,resp)=>{
    const {email,password}=req.body;
    const userdoc = await  User.findOne({email:req.body.email});
    console.log(req.body);
    if(userdoc)
    {
        const comp_pass = bcrypt.compareSync(password,userdoc.password);
        if(comp_pass)
        {
            jwt.sign({name:userdoc.name,email:userdoc.email,id:userdoc._id},jwtsecret,{},(err,token)=>{
                if(err) throw err;
                resp.cookie('token',token).json(userdoc);
            })
        }
        else{
            resp.status.apply(400).json("password is wrong");
        }
    }
    else{
        resp.status(400).json("register first");
    }
})
app.get('/profile',(req,resp)=>{
    const {token}=req.cookies;
    if(token)
    {
            jwt.verify(token,jwtsecret,{},(err,user)=>{
                if(err) throw err;
                resp.json(user);
            })
    }
    else{
        resp.json(null);
    }
    // resp.json("gbhkj");
})
app.post('/logout',(req,resp)=>{
    resp.cookie('token','').json(true);
})
app.listen(process.env.PORT,(req,resp)=>{
    console.log("Successfuly  hosted on port " , process.env.PORT);
});
