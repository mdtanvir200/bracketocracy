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

    static searchuser=async (req,res)=>{
        try{
            let empid=req.params.id;
            const result=await Emp.findById(empid);
            res.status(200).json({empdata:result});
        }
        catch(err)
        {
            res.status(404).json({error:err.message}); 
        }
    }

    

    static insertdata=async (req,res)=>{
        try 
        {
             const data=req.body; 
             const empdata=new Emp();
             empdata.name=data.name;
             empdata.age=data.age;
             empdata.email=data.email;
             empdata.loc=data.loc;
             empdata.dept=data.dept;
             const result=await empdata.save();
             res.status(200).json({msg:"Insert done successful",data:result});
        }
        catch(err)
        {
            res.status(404).json({error:err.message});  
        }
    }

    static upddata=async (req,res)=>{
        try
        {
           const eid=req.params.id;
           const data=req.body;
           const edata=await Emp.findById(eid); 
           edata.name=data.name;
           edata.age=data.age;
           edata.email=data.email;
           edata.loc=data.loc;
           edata.dept=data.dept;
           const upd = await edata.save();
           res.status(200).json({msg:"update done successful",data:upd});
        }
        catch(err)
        {
            res.status(404).json({error:err.message});   
        }
    }

    static empfind =async (req,res)=>{
        try{
             const data=req.body;
             const result=await Emp.find({loc:data.loc,dept:data.dept});
             if(result.length>0)
             {
                res.status(200).json({info:result})
             }
             else
             {
                res.status(200).json({msg:"no such record exsist"})
             }
        }
        catch(err)
        {
            res.status(404).json({error:err.message}); 
        }
    }

    static empdel=async (req,res)=>{
        try
        {
            const eid=req.params.id;
            const result=await Emp.findByIdAndDelete(eid);
            res.status(200).json({msg:"record delete done",info:result})
        }
        catch(err)
        {
            res.status(404).json({error:err.message});  
        }
    }
}

module.exports=UserController;