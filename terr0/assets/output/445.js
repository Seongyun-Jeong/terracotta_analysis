var PropTypes = require('prop-types'),
  f = {
    id: PropTypes.default.string,
    minPointers: PropTypes.default.number,
    enabled: PropTypes.default.bool,
    waitFor: PropTypes.default.oneOfType([
      PropTypes.default.string,
      PropTypes.default.object,
      PropTypes.default.arrayOf(PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.object])),
    ]),
    simultaneousHandlers: PropTypes.default.oneOfType([
      PropTypes.default.string,
      PropTypes.default.object,
      PropTypes.default.arrayOf(PropTypes.default.oneOfType([PropTypes.default.string, PropTypes.default.object])),
    ]),
    shouldCancelWhenOutside: PropTypes.default.bool,
    hitSlop: PropTypes.default.oneOfType([
      PropTypes.default.number,
      PropTypes.default.shape({
        left: PropTypes.default.number,
        top: PropTypes.default.number,
        right: PropTypes.default.number,
        bottom: PropTypes.default.number,
        vertical: PropTypes.default.number,
        horizontal: PropTypes.default.number,
        width: PropTypes.default.number,
        height: PropTypes.default.number,
      }),
    ]),
    onGestureEvent: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
    onHandlerStateChange: PropTypes.default.oneOfType([PropTypes.default.func, PropTypes.default.object]),
    onBegan: PropTypes.default.func,
    onFailed: PropTypes.default.func,
    onCancelled: PropTypes.default.func,
    onActivated: PropTypes.default.func,
    onEnded: PropTypes.default.func,
  };

exports.default = f;
