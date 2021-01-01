const chalk = require('chalk');

const logAppRunning = ({ PORT }) => {
  console.log(`
    App is listening on port ${chalk.blue(`${PORT}`)}
    ${chalk.bold.green(`http://localhost:${PORT}/`)}
`);
};

module.exports = logAppRunning;
