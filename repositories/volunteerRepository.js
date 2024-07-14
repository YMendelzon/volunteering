const { writeVolunteers, getVolunteers } = require('../data/volunteerData');

const volunteers = getVolunteers();

exports.createVolunteer = (newVolunteer) => {
    const newId = volunteers.length + 1;
    const newCode=volunteers.length + 1;
    const objectWithId = { id: newId,volunteerCode:newCode, ...newVolunteer };
    volunteers.push(objectWithId);
    writeVolunteers(volunteers);
    return newCode;
};

exports.getVolunteerById = (id) => {
    return volunteers.find(volunteer => volunteer.id === id);
};

exports.getIsVolunteerExist = (id) => {
    return volunteers.some(volunteer => volunteer.id === id);
};

exports.getCodeVolunteer = (id) => {
    return volunteers.find(volunteer => volunteer.id === id);
};
