const execSync = require('child_process').execSync;
const mssg = process.argv[2];
execSync('git add . && git commit -m \"' + mssg + '\"', { stdio:[0, 1, 2] });