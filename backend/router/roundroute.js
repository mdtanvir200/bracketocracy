const express = require('express');
const { addround,viewRound,deleteRound,updateRound }=require('../controller/RoundController');

const router = express.Router();
 

router.post('/newround', addround);
router.get("/viewround", viewRound);
router.delete("/delete", deleteRound);
router.put("/editround/:id", updateRound);

module.exports = router;