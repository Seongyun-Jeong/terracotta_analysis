exports.val = function (_) {
  return _ && _.__getValue ? _.__getValue() : _ || 0;
};
