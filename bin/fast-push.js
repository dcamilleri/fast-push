'use strict';

var exec = require('child_process').exec;
var throwErr = require('../utils/throw-err');

function fastPush(commitMessage) {
  exec('git --version', function(error) {
    if(error) {
      throwErr('You don\'t have git installed');
    } else {
      exec('git rev-parse --abbrev-ref HEAD', function(err, currentBranch) {
        if(err) {
          throwErr('Can\'t get your current branch. Are you sure this is a git repository?');
        } else {
          exec('git add --all', function(addErr) {
            if(addErr) {
              throwErr(addErr);
            } else {
              exec('git commit -m "[' + currentBranch + ']' + commitMessage + '"', function(commitErr) {
                if(commitErr) {
                  throwErr(commitErr);
                } else {
                  exec('git push origin ' + currentBranch, function(pushErr) {
                    if(pushErr) {
                      throwErr(pushErr);
                    } else {
                      console.log('Pushed!');
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}

module.exports = fastPush;