const Team = require('../models/teams');
const mongoose=require('mongoose');
const upload =require('../config/upload');


class TeamController
{
     static fileupload(req,res)
     {
        const url = req.protocol + '://' + req.get('host')
        const team = new Team({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            logo: url + '/public/' + req.file.filename,
            seed: req.body.seed
        });
        team.save().then(result => {
            res.status(200).json({
                message: "team created successfully!",
                userCreated: {
                    _id: result._id,
                    name:result.name,
                    logo: result.logo,
                    seed:result.seed
                }
            })
        }).catch(err => {
            console.log(err);
                res.status(500).json({
                    msg:'Invalid file. cannot upload',
                    error: err.message
                });
        })
     }

     static deleteteam =async(req,res)=>{
        try{
            const teamid = req.params.id;
            const result = await Team.findByIdAndDelete(teamid);
            res.status(200).json({message:"team deleted successfully",info:result});
        }catch(err)
        {
            res.status(404).json({error:err.message});
        }

     }

     static displayall(req,res)
     {
        Team.find().then(data => {
            res.status(200).json({
                message: "User list retrieved successfully!",
                users: data
            });
        });
     }

     static updateTeam = async (req, res) => {
        try {
            const teamid = req.params.id;
            const team = await Team.findById(teamid);
            if (!team) {
                return res.status(404).json({ error: 'Team not found' });
            }
            if (req.body.name) {
                team.name = req.body.name;
            }
            if (req.file) {
                const url = req.protocol + '://' + req.get('host')
                team.logo = url + '/public/' + req.file.filename;
            }
            if (req.body.seed) {
                team.seed = req.body.seed;
            }
            await team.save();
            res.status(200).json({ message: "Team updated successfully", team: team });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
     
     

 
}

module.exports=TeamController;