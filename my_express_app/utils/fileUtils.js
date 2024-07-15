const fs = require('fs');
const path = require('path');

const deleteFile = (filename) => {
    const filePath = path.join(__dirname, '../uploads', filename);
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file: ${filePath)', err);
        } else {
            console.log(`File deleted: ${filePath}`);
        }
    });
};

module.exports = {
    deleteFile,
};