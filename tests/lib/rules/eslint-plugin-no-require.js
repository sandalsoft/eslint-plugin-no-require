/**
 * @fileoverview ESLint rule disallowing require() in favor of es2015 import {}.  Fixable
 * @author Eric Nelson
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-no-require"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("eslint-plugin-no-require", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "const program = require('commander');",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
