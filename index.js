'use strict';

const { RULE_OFF, RULE_ON, RULE_WARN_ONLY } = require('./lib/consts');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    './lib/overrides',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2018
  },
  env: {
    'jest/globals': true,
    mocha: true,
  },
  plugins: [
    'chai-friendly',
    'node',
    'jest'
  ],
  rules: {
    'no-await-in-loop': RULE_WARN_ONLY,
    'no-plusplus': RULE_OFF,
    'arrow-parens': [RULE_ON, 'as-needed'],
    'no-use-before-define': RULE_OFF,
    'max-depth': [RULE_ON, 4],
    'class-methods-use-this': RULE_OFF,
    'no-underscore-dangle': RULE_OFF,
    'comma-dangle': [RULE_ON, 'only-multiline'],
    'arrow-body-style': [RULE_ON, 'as-needed'],
    'max-len': [RULE_ON,
      {
        code: 120,
        comments: 160,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      }
    ],
    'indent': [
      RULE_ON,
      4,
      {
       'SwitchCase': RULE_WARN_ONLY
      }
    ],
    'max-classes-per-file': RULE_OFF,
    'no-restricted-syntax': RULE_OFF,
    'prefer-object-spread': RULE_ON,
    'strict': [RULE_ON, 'global'],
    'node/exports-style': [RULE_ON,
      'module.exports'
    ],
    'import/no-extraneous-dependencies': [RULE_ON,
      {
        devDependencies: [
          '**/test/**',
          '**/*{test,spec}.js',
        ]
      }
    ],
    'func-names': RULE_OFF,
    'no-unused-expressions': RULE_OFF
  }
};
