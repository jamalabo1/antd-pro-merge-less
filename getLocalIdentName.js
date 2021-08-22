const genericNames = require('generic-names');

module.exports = (className, path) => {
  const result = genericNames('[local]___[hash:base64:5]')(className, path);
  if (process.env.NODE_ENV === 'development') {
    console.log(`[-]: transform: {${className} to {${result}, path: {${path}}`);
  }
  return result;
};