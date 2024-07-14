const helpRequestRepository = require('../repositories/helpRequstRepository');

exports.getAllHelpRequests = () => {
    return helpRequestRepository.getAllHelpRequests();
};

exports.getHelpRequestsByStatus = (status) => {
    return helpRequestRepository.getHelpRequestsByStatus(status);
};

exports.createHelpRequest = (newHelpRequest) => {
    return helpRequestRepository.createHelpRequest(newHelpRequest);
};

exports.getHelpRequestsByLocation = (location) => {
    return helpRequestRepository.getHelpRequestsByLocation(location);
};

exports.getHelpRequestsByPriorityLevel = (priorityLevel) => {
    return helpRequestRepository.getHelpRequestsByPriorityLevel(priorityLevel);
};

exports.setVolunteerOnRequest = (idR, idV) => {
    return helpRequestRepository.setVolunteerOnRequest(idR, idV);
};
