/**
 * @fileoverview ESLint rule disallowing require() in favor of es2015 import {}.  Fixable
 * @author Eric Nelson
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/eslint-plugin-no-require'),
  RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      arrowFunctions: true,
      experimentalObjectRestSpread: true
    }
  }
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();

ruleTester.run('eslint-plugin-no-require', rule, {
  valid: [
    {
      code: `import { createLicense } from './createLicense';`
    }
  ],

  invalid: [
    {
      code: "const program = require('commander');",
      errors: [
        {
          message: 'Use import syntax rather than require()',
          type: 'CallExpression'
        }
      ]
    }
  ]
});
