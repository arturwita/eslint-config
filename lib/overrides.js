'use strict';

const { RULE_OFF } = require('./consts');

module.exports = {
  overrides: [
    {
      files: [
        'test/**'
      ],
      rules: {
        'node/no-unpublished-require': RULE_OFF,
        'no-console': RULE_OFF,
        'no-await-in-loop': RULE_OFF
      }
    }
  ]
};
