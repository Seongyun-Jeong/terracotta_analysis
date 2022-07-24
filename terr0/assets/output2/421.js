var t = function (t, n) {
  var o = t.state,
    u = t.router,
    f = t.getChildNavigation(o.routes[o.index].key);
  return u.getScreenOptions(f, n);
};

export default t;
