const { defaults } = require('jest-config');

/** @type {import('jest').Config} */
const config = {
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "babel-jest",
  }
};

module.exports = defaults;