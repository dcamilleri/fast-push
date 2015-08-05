'use strict';

var execPromise = require('../utils/exec-promise');
var errorLogs = require('../utils/errors');
var currentBranch;

function fastPush(commitMessage) {
  execPromise('git --version', errorLogs.gitNotInstalled)
    .then(function() {
      return execPromise('git rev-parse --abbrev-ref HEAD', errorLogs.branchNotFound);
    })
    .then(function(branch) {
      currentBranch = branch;
      return execPromise('git add --all', errorLogs.addError);
    })
    .then(function() {
      return execPromise('git commit -m "' + commitMessage + '"', errorLogs.commitError);
    })
    .then(function() {
      return execPromise('git push origin ' + currentBranch, errorLogs.commitError);
    })
    .then(function() {
      console.log('"' + commitMessage + '"\nPushed!');
    });
}

module.exports = fastPush;