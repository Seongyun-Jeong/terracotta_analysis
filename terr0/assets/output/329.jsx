var module11 = require('./11'),
  module146 = require('./146'),
  module288 = require('./288'),
  React = require('react'),
  module330 = require('./330'),
  module3 = require('./3');

require('./331');

module.exports = function (t, s, _, f, v, E) {
  module3(_, 'Expect to have a valid rootTag, instead got ', _);
  var T = (
    <module288 rootTag={_} WrapperComponent={f}>
      <t />
      {true === v && true === E ? <module330 /> : null}
    </module288>
  );

  if (null != t.prototype && true === t.prototype.unstable_isAsyncReactComponent) {
    var y = React.unstable_ConcurrentMode;
    T = <y>{T}</y>;
  }

  module146.default.startTimespan('renderApplication_React_render');
  if (v) require('./332').render(T, _);
  else require('./78').render(T, _);
  module146.default.stopTimespan('renderApplication_React_render');
};
