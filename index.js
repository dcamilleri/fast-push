#! /usr/bin/env node

'use strict';

var fastPush = require('./bin/fast-push-promise');
var throwErr = require('./utils/throw-err');
var args = process.argv.slice(2);
var commitMessage = args[0];

if(!commitMessage) {
  throwErr('Please provide a commit message!');
} else {
  fastPush(commitMessage);
}
