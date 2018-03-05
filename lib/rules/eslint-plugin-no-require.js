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
      category: 'Fill me in',
      recommended: false
    },
    fixable: code, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create(context) {
    return {
      Identifier(node) {
        if (
          node.name === 'require' &&
          node.parent.parent.type === 'VariableDeclarator'
        ) {
          context.report(node, 'Prefer es6 import over require()');

          const moduleName = node.parent.arguments[0].value;

          let moduleType;
          if (moduleName.includes('.')) {
            moduleType = 'local';
          } else {
            moduleType = 'package';
          }
          // object notation
          if (node.parent.parent.id.type === 'ObjectPattern') {
            console.log(
              'var: {',
              node.parent.parent.id.properties[0].key.name,
              '}'
            );
            console.log('moduleName: ', moduleName);
            console.log('moduleType: ', moduleType);
          } else {
            // no object notation
            console.log('varName: ', node.parent.parent.id.name);
            console.log('moduleName: ', moduleName);
            console.log('moduleType: ', moduleType);
          }
        }
      }
    };
  }
};
