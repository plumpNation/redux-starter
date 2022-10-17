const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};

module.exports = defaults;