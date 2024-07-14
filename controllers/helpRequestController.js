const helpRequestService = require('../services/helpRequestService');

exports.getAllHelpRequests = (req, res) => {
    const helpRequests = helpRequestService.getAllHelpRequests();
    res.json(helpRequests);
};

exports.getHelpRequestsByStatus = (req, res) => {
    const status = req.query.status;
    const helpRequests = helpRequestService.getHelpRequestsByStatus(status);
    if (helpRequests) {
        res.json(helpRequests);
    } else {
        res.status(404).send('status not found');
    }
};

exports.createHelpRequest = async (req, res) => {
    try {
        const newHelpRequest = req.body;
        if (!newHelpRequest) {
            throw new Error('Empty request body');
        }
        const createdHelpRequest = await helpRequestService.createHelpRequest(newHelpRequest);
        res.status(201).json(createdHelpRequest);
    } catch (error) {
        console.error('Error handling request:', error.message);
        res.status(400).json({ error: error.message });
    }
};

exports.getHelpRequestsByLocation = (req, res) => {
    const location = req.body;
    const requestsByLocation = helpRequestService.getHelpRequestsByLocation(location);
    if (requestsByLocation) {
        res.json(requestsByLocation);
    } else {
        res.status(404).send('requestsByLocation not found');
    }
};

exports.getHelpRequestsByPriorityLevel = (req, res) => {
    const priorityLevel = req.body;
    const requestsByPriorityLevel = helpRequestService.getHelpRequestsByPriorityLevel(priorityLevel);
    if (requestsByPriorityLevel) {
        res.json(requestsByPriorityLevel);
    } else {
        res.status(404).send('requestsByPriorityLevel not found');
    }
};

exports.setVolunteerOnRequest = async (req, res) => {
    const idR = parseInt(req.params.idR);
    const idV = parseInt(req.params.idV);
    try {
        const updatedRequest = await helpRequestService.setVolunteerOnRequest(idR, idV);
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};
