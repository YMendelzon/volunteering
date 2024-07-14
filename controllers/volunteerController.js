const volunteerService = require('../services/volunteerService');

exports.createVolunteer = async (req, res) => {
    try {
        const newVolunteer = req.body;
        if (!newVolunteer) {
            throw new Error('Empty request body');
        }
        const createVolunteer = await volunteerService.createVolunteer(newVolunteer);
        res.status(201).json(createVolunteer);
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(400).json({ error: error.message });
    }
};

exports.getVolunteerById = async (req, res) => {
    const id = parseInt(req.query.id);
    try {
        const volunteer = await volunteerService.getVolunteerById(id);
        if (!volunteer) {
            throw new Error("You are not exist, Please Signup");
        }
        res.json(volunteer);
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(404).json({ error: error.message });
    }
};

exports.getIsVolunteerExist = async (req, res) => {
    const id = parseInt(req.query.id);
    try {
        const isVolunteerExist = await volunteerService.getIsVolunteerExist(id);
        res.json(isVolunteerExist);
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(404).json({ error: 'Failed to check volunteer existence' });
    }
};

exports.getCodeVolunteer = async (req, res) => {
    const id = parseInt(req.query.id);
    try {
        const codeVolunteer = await volunteerService.getCodeVolunteer(id);
        res.json(codeVolunteer);
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(404).json({ error: 'Failed to fetch volunteer code' });
    }
};
