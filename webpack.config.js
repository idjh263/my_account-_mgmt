const path = require('path');

module.exports = {
    entry: './public/js/index.js', 
    output: {
        path: path.resolve(__dirname, 'public/js'), 
        filename: 'main.bundle.js'
    }, 
    mode: 'development'
};