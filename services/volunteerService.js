const volunteerRepository = require('../repositories/volunteerRepository');

exports.createVolunteer = (newVolunteer) => {
    return volunteerRepository.createVolunteer(newVolunteer);
};

exports.getVolunteerById = (id) => {
    return volunteerRepository.getVolunteerById(id);
};

exports.getIsVolunteerExist = (id) => {
    return volunteerRepository.getIsVolunteerExist(id);
};

exports.getCodeVolunteer = (id) => {
    return volunteerRepository.getCodeVolunteer(id);
};
