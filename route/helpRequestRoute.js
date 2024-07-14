const express = require('express');
const router = express.Router();
const helpRequestController = require('../controllers/helpRequestController');

router.get('/gethelpRequests', helpRequestController.getAllHelpRequests);//
router.get('/HelpRequestsByStatus', helpRequestController.getHelpRequestsByStatus);//
router.post('/HelpRequest', helpRequestController.createHelpRequest);//
router.get('/HelpRequestsByLocation', helpRequestController.getHelpRequestsByLocation);//
router.get('/HelpRequestsByPriorityLevel', helpRequestController.getHelpRequestsByPriorityLevel);//
router.put('/updateHelpRequestById/:idR/:idV', helpRequestController.setVolunteerOnRequest);//

module.exports = router;