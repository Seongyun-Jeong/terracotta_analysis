module.exports = function (t) {
  if (('function' == typeof Symbol ? Symbol.iterator : '@@iterator') in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
};
