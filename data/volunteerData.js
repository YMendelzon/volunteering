const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../jsonData/volunteer.json');

const getVolunteers = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const writeVolunteers = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
    getVolunteers,
    writeVolunteers
};
