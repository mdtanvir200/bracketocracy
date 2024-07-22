const express = require('express');
const upload = require('../config/upload');
const {fileupload, displayall,deleteteam, updateTeam} = require('../controller/TeamController');
const router = express.Router();
 

router.post('/createteam',upload.single('logo'),fileupload);
router.get('/display',displayall);
router.delete('/delete/:id',deleteteam);
router.put('/update/:id',updateTeam);
 

module.exports = router;