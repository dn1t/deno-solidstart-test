import tslib from 'npm:tslib';
import babelOptions from 'npm:/recast/parsers/_babel_options.js';
import parser from 'npm:@babel/parser';

function parse(source, options) {
  const _babelOptions = babelOptions(options);
  _babelOptions.plugins.push('jsx', 'decoratorAutoAccessors', 'typescript');
  return exports.parser.parse(source, _babelOptions);
}

export default { parser, parse };

// exports.parse = exports.parser = void 0;
// var tslib_1 = require('tslib');
// var _babel_options_1 = tslib_1.__importDefault(
//   require('recast/parsers/_babel_options'),
// );
// Prefer the new @babel/parser package, but fall back to babylon if
// that's what's available.
// exports.parser = (function () {
//   try {
//     return require('@babel/parser');
//   } catch (_a) {
//     try {
//       return require('babylon');
//     } catch (_b) {
//       throw new Error(
//         'Install @babel/parser to use the `typescript`, `flow`, or `babel` parsers',
//       );
//     }
//   }
// })();
// // This module is suitable for passing as options.parser when calling
// // recast.parse to process JavaScript code with Babel:
// //
// //   const ast = recast.parse(source, {
// //     parser: require("recast/parsers/babel")
// //   });
// //
// function parse(source, options) {
//   var babelOptions = (0, _babel_options_1.default)(options);
//   babelOptions.plugins.push('jsx', 'decoratorAutoAccessors', 'typescript');
//   return exports.parser.parse(source, babelOptions);
// }
// exports.parse = parse;
