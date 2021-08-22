const genericNames = require('generic-names');

module.exports = (className, path) => genericNames('[local]___[hash:base64:5]')(className, path);
