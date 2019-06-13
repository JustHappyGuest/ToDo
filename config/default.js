const path = require('path');

module.exports = {
  port: 80,
  distRoot: path.join(process.cwd(), 'client', 'dist'),
  jsonRoot: path.join(process.cwd(), 'json')
};
