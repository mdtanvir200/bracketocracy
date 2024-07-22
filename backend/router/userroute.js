const express=require('express');

const route=express.Router();

// const UC=require('../controller/UserController');
const ZC =require('../controller/ZoneController');
 
 

route.get('/viewall',ZC.getallzone);
route.post('/createzone',ZC.newzone);

 


module.exports=route;