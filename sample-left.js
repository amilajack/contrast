/* eslint-disable */
window.$ = window.jQuery = require('jquery');
bootstrap = require('bootstrap');
highlights = require('highlights');
diff = require('diff');
path = require('path');

// temp for dev
const left = `${__dirname}/sample-left.js`;
const right = `${__dirname}/sample-right.js`;

console.log('this is file sample-left.js')

function thisIsAFnDeclaration() {

}
