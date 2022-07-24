import React from 'react';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module543 = require('./543'),
  module527 = require('./527');

class h {
  constructor() {
    module356.default(this, c);
    return module358.default(this, module361.default(c).apply(this, arguments));
  }

  static resolveNode(t) {
    return 'function' == typeof t ? h.resolveNode(t()) : t instanceof module527.default ? t : null;
  }

  componentDidMount() {
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
  }

  componentWillUnmount() {
    this.always.__detach();
  }

  render() {
    return null;
  }
}

var y = h;
export default y;
