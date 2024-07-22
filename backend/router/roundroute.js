const express = require('express');
const { addround }=require('../controller/RoundController');

const router = express.Router();
 

router.post('/newround', addround);
// router.get('/viewzone',viewall);
// router.delete('/deletezone/:id',zonedelete);
// router.put('/editzone/:id',updatezone);
// router.get('/viewzonebyid/:id',searchzone);
// router.get('/viewzonebyslug/:slug',searchZoneBySlug);

module.exports = router;