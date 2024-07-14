const { getHelpRequests, writeHelpRequests, updateHelpRequestById } = require('../data/helpRequstData');
const helpRequests = getHelpRequests();

exports.getAllHelpRequests = () => {
    return getHelpRequests();
};

exports.getHelpRequestsByStatus = (status) => {
    return helpRequests.filter(helpRequest => helpRequest.status === status);
};

exports.getHelpRequestsByLocation = (location) => {
    return helpRequests.filter(request => {
        if (location.length !== 2) {
            return false;
        }
        const location1Exists = request.location.includes(location[0]);
        const location2Exists = request.location.includes(location[1]);
        return location1Exists && location2Exists && request.status === 'waiting';
    });
};

exports.getHelpRequestsByPriorityLevel = (priorityLevel) => {
    return helpRequests.filter(request => {
        if (priorityLevel.length !== 2) {
            return false;
        }
        const location1Exists = request.PriorityCode.includes(priorityLevel[0]);
        const location2Exists = request.PriorityCode.includes(priorityLevel[1]);
        return location1Exists && location2Exists && request.status === 'waiting';
    });
};

exports.createHelpRequest = (newHelpRequest) => {
    const newId = helpRequests.length + 1;
    const newVolunteerCode = 0;
    const newStatus = "waiting";
    const newR = { id: newId, volunteerCode: newVolunteerCode, status: newStatus, ...newHelpRequest };
    helpRequests.push(newR);
    writeHelpRequests(helpRequests);
    return newHelpRequest;
};

exports.setVolunteerOnRequest = (idR, idV) => {
    updateHelpRequestById(idR, idV);
};
