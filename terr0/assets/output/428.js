var module51 = require('./51'),
  module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  React = require('react'),
  module2 = require('./2');

exports.default = function (t, T) {
  var h, v;

  v = h = (function (h, ...args) {
    function v() {
      var t, n;
      module356.default(this, v);
      (n = module358.default(this, (t = module361.default(v)).call.apply(t, [this].concat(args))))._previouslyFocusedTextInput = null;

      n._handleGestureBegin = function () {
        n._previouslyFocusedTextInput = module2.TextInput.State.currentlyFocusedField();
        if (n._previouslyFocusedTextInput) module2.TextInput.State.blurTextInput(n._previouslyFocusedTextInput);
        if (n.props.onGestureBegin) n.props.onGestureBegin();
      };

      n._handleGestureCanceled = function () {
        if (n._previouslyFocusedTextInput) module2.TextInput.State.focusTextInput(n._previouslyFocusedTextInput);
        if (n.props.onGestureCanceled) n.props.onGestureCanceled();
      };

      n._handleGestureEnd = function () {
        n._previouslyFocusedTextInput = null;
        if (n.props.onGestureFinish) n.props.onGestureFinish();
      };

      n._handleTransitionStart = function (t, u) {
        if (t.index !== u.index) {
          var o = module2.TextInput.State.currentlyFocusedField();
          if (o) module2.TextInput.State.blurTextInput(o);
        }

        var s = n.props.onTransitionStart || T.onTransitionStart;
        if (s) s(t, u);
      };

      return n;
    }

    module362.default(v, h);
    module357.default(v, [
      {
        key: 'render',
        value: function () {
          return React.default.createElement(
            t,
            module51.default({}, this.props, {
              onGestureBegin: this._handleGestureBegin,
              onGestureCanceled: this._handleGestureCanceled,
              onGestureEnd: this._handleGestureEnd,
              onTransitionStart: this._handleTransitionStart,
            })
          );
        },
      },
    ]);
    return v;
  })(React.default.Component);

  h.router = t.router;
  h.navigationOptions = t.navigationOptions;
  return v;
};
