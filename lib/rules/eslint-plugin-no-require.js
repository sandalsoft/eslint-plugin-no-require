/**
 * @fileoverview ESLint rule disallowing require() in favor of es2015 import {}.  Fixable
 * @author Eric Nelson
 */
'use strict';

const astUtils = require('ast-utils');
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description:
        'ESLint rule disallowing require() in favor of es2015 import {}.  Fixable',
      category: 'es2015 best practice',
      recommended: false
    },
    fixable: 'code', // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create(context) {
    return {
      CallExpression(node) {
        if (astUtils.isStaticRequire(node)) {
          const requiredModule = astUtils.getRequireSource(node);

          context.report({
            node: node,
            message: 'Use import syntax rather than require()'
          });
        }
      }
    };
  }
};
