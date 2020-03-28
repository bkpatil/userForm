const branch = require('git-branch');
const chalk = require('chalk');
const simpleGit = require('simple-git')(); //https://www.npmjs.com/package/simple-git
const libVersion = require('./projects/ngx-user-form/package');

branch(function (err, name) {
console.log('Pushing changes on branch: ' + chalk.green.bold(name));
if (err) {
console.error(chalk.red.bold('Error getting branch name'));
throw err;
}
simpleGit
.add('./*')
.commit('build version: ' + libVersion.version)
.push('origin', name, () => {
console.log(chalk.green.bold("Done"))
})
});
