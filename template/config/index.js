var path = require('path');

module.exports = {
    build: {
        dist: path.resolve(__dirname, '../dist/')
    },
    prePublish: {
        dist: path.resolve(__dirname, '/path/to/application/static/')
    }
}