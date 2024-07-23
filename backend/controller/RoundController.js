const  Round = require('../models/rounds');
const  Season = require('../models/season');
const slugify = require('slugify');

class RoundController
{

    static addround = async(req,res)=>{
        try {
            const season = await Season.findById(req.body.seasonId);
            if (!season) {
              return res.status(404).send({ message: 'Season not found' });
            }
            
            const { name,playDate,biddingEndDate,totalMatch,seasonId} = req.body;
            if (!name ) {
              console.log(name);
              return res.status(400).json({ error: 'Name  is required' });

            }
            const slug = slugify(name);
            const round = new Round( {name,slug,playDate,biddingEndDate,totalMatch,seasonId} );
            const result = await round.save();
            res.status(201).json({ message: 'Zone created successfully', data: result });
          } catch (error) {
            console.error(error);
            res.status(404).json({ error: 'Internal Server Error' });
          }
    }
    //get all round------------
  static viewRound = async (req, res) => {
    try {
      const roundList = await Round.find().exec();
      res.json(roundList);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error fetching roles", error: error.message });
    }
  };

  static deleteRound = async (req, res) => {
    try {
      const roundId = req.params.id;
      if (!roundId) {
        return res.status(400).json({ message: "round ID is required" });
      }

      const user = await Round.deleteOne({ _id: roundId });
      if (user.deletedCount === 0) {
        return res.status(404).json({ message: "round not found" });
      }

      res.json({ message: "round deleted successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error deleting round", error: error.message });
    }
  };

  static updateRound = async (req, res) => {
    try {
      const roundid = req.params.id;
      const data = req.body;
      const rounddata = await Round.findById(roundid);
      rounddata.name = data.name;
      rounddata.totalMatch = data.totalMatch;
      

      const update = await rounddata.save();
      res
        .status(200)
        .json({ message: "update done successfully", info: update });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  };
}

module.exports=RoundController;