const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../jsonData/helpRequests.json');

const getHelpRequests = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

const writeHelpRequests = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const updateHelpRequestById = (idR, idV) => {
    const helpRequests = getHelpRequests();
    const index = helpRequests.findIndex(request => request.id.toString() === idR.toString());
    if (index != -1) {
        helpRequests[index].volunteerCode = idV;
        helpRequests[index].status = 'processing';
        writeHelpRequests(helpRequests);
        return helpRequests[index];
    } else {
        throw new Error('Request not found');
    }
};

module.exports = {
    getHelpRequests,
    writeHelpRequests,
    updateHelpRequestById
};
