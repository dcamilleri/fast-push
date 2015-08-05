'use strict';

var execPromise = require('../utils/exec-promise');
var errorLogs = require('../utils/errors');

console.log('Without getting branch----------');

function fastPush(commitMessage) {
  execPromise('git --version', errorLogs.gitNotInstalled)
    .then(function() {
      return execPromise('git add --all', errorLogs.addError);
    })
    .then(function() {
      return execPromise('git commit -m "' + commitMessage + '"', errorLogs.commitError);
    })
    .then(function() {
      return execPromise('git push origin HEAD', errorLogs.commitError);
    })
    .then(function() {
      console.log('"' + commitMessage + '"\nPushed!');
    });
}

module.exports = fastPush;