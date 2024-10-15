const path = require('path');

module.exports = {
    moduleDirectories: ['node_modules'],
    // rootDirs: [
    //     path.resolve(__dirname, 'server/src/components'),
    //     path.resolve(__dirname, 'server/src/engine'),
    // ],
    rootDir: path.resolve(__dirname, 'server/src/engine'),
    testEnvironment: 'node',
};
