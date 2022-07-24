var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module543 = require('./543'),
  module527 = require('./527'),
  h = (function (t) {
    function c() {
      module356.default(this, c);
      return module358.default(this, module361.default(c).apply(this, arguments));
    }

    module362.default(c, t);
    module357.default(c, [
      {
        key: 'componentDidMount',
        value: function () {
          var t = this.props,
            n = t.children,
            o = t.exec,
            l = c.resolveNode(n),
            u = c.resolveNode(o);
          if (null === l && null === u)
            throw new Error(
              "<Animated.Code /> expects the 'exec' prop or children to be an animated node or a function returning an animated node. " +
                (null === l ? 'Got "' + typeof n + '" type passed to children' : 'Got "' + typeof o + '" type passed to exec')
            );
          this.always = module543.createAnimatedAlways(u || l);

          this.always.__attach();
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.always.__detach();
        },
      },
      {
        key: 'render',
        value: function () {
          return null;
        },
      },
    ]);
    return c;
  })(React.default.Component);

h.resolveNode = function (t) {
  return 'function' == typeof t ? h.resolveNode(t()) : t instanceof module527.default ? t : null;
};

var y = h;
exports.default = y;
