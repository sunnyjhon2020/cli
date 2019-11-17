const chalk = require('chalk');

function logCount (file, count) {
  console.log(chalk.green(`${count} endpoints changed in`) +' '+ chalk.italic.red(`'${file}'`));
};

module.exports = logCount;