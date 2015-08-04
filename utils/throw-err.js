'use strict';

function throwErr(message) {
  console.log(message);
  process.exit(1);
}

module.exports = throwErr;