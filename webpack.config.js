var path = require('path');

module.exports = {
    context: __dirname,
    entry: "./src/theStairs.js",
    output: {
        path: path.resolve(__dirname),
        filename: "./dist/bundle.js"
    },
    devtool: 'source-map',
};
