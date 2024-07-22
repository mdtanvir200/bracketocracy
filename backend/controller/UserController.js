const user=require('../models/empmodel');
class UserController
{
    static showall=async(req,res)=>{
        try{
           const data=await Emp.find();
           res.status(200).json({info:data});
        }
        catch(err)
        {
           res.status(404).json({error:err.message});
        }
    }

}

module.exports=UserController;