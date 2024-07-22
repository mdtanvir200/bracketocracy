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
}

module.exports=RoundController;