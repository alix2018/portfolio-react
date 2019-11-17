const indexMode = process.argv.findIndex(el => {
  return el === '--mode';
});
const mode = process.argv[indexMode + 1] === 'production' ? 'prod' : 'dev';

module.exports = require('./webpack.' + mode + '.js');
