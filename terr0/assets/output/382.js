exports.default = function (n) {
  if (!n) return {};
  var t = n._childrenNavigation || (n._childrenNavigation = {}),
    o = n.state.routes.map(function (n) {
      return n.key;
    });
  Object.keys(t).forEach(function (u) {
    if (!(o.includes(u) || n.state.isTransitioning)) delete t[u];
  });
  return n._childrenNavigation;
};
