'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escape;

var _assertString = require('./util/assertString');

var _assertString2 = _interopRequireDefault(_assertString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function escape(str) {
  var ignores = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  (0, _assertString2.default)(str);
  var lists = [{ symbol: '\&', value: '&amp;' }, { symbol: '\"', value: '&quot;' }, { symbol: '\'', value: '&#x27;' }, { symbol: '\<', value: '&lt;' }, { symbol: '\>', value: '&gt;' }, { symbol: '\\\\', value: '&#x5C;' }, { symbol: '\/', value: '&#x2F;' }, { symbol: '\`', value: '&#96;' }];

  return lists.filter(function (x) {
    return ignores.indexOf(x.symbol) === -1;
  }).reduce(function (prev, _ref) {
    var symbol = _ref.symbol,
        value = _ref.value;
    return prev.replace(new RegExp(symbol, 'g'), value);
  }, str);
}
module.exports = exports['default'];