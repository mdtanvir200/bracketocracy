// season routes.js
const express = require('express');
const {addseason,viewall,seasondelete,updateseason,searchseason} = require('../controller/SeasonController');
const router = express.Router();
 

router.post('/newseason', addseason);
router.get('/viewseason',viewall);
router.delete('/deleteseason/:id',seasondelete);
router.put('/editseason/:id',updateseason);
router.get('/viewseasonbyid/:id',searchseason);

module.exports = router;