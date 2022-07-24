var t;

switch (
  (Object.defineProperty(exports, '__esModule', {
    value: true,
  }),
  (exports.default = undefined),
  require('./2').Platform.OS)
) {
  case 'android':
    t = require('./500').default;
    break;

  case 'ios':
    t = require('./501').default;
    break;

  default:
    t = require('./502').default;
}

var f = t;
exports.default = f;
