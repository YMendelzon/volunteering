const express = require('express');
const router = express.Router();
const volunteerController = require('../controllers/volunteerController');

router.post('/volunteer', volunteerController.createVolunteer);//
router.get('/volunteerById', volunteerController.getVolunteerById);//
router.get('/isVoleenterExist', volunteerController.getIsVolunteerExist);//
router.get('/CodeVolunteer', volunteerController.getCodeVolunteer);

module.exports = router;