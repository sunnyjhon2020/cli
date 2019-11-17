const chalk = require('chalk');

function logCount (file, count) {
  let endpoint;
  if (count > 1 || count === 0) {
    endpoint = 'endpoint\'s';
  } else {
    endpoint = 'endpoint';
  }
  console.log(chalk.green(`${count} ${endpoint} changed in`) +' '+ chalk.italic.red(`'${file}'`));
};

module.exports = logCount;