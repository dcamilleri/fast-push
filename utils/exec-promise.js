'use strict';

var exec = require('child_process').exec;
var throwErr = require('./throw-err');

function execPromise(command, err) {
  return new Promise(function(resolve, reject) {
    exec(command, function(error, result) {
      if(error) {
        reject(throwErr(err));
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = execPromise;