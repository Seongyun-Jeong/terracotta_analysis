import PropTypes from 'prop-types';

var module58 = require('./58'),
  module182 = require('./182'),
  module183 = require('./183'),
  module67 = module183(require('./67'));

module.exports = {
  ellipsizeMode: PropTypes.oneOf(['head', 'middle', 'tail', 'clip']),
  numberOfLines: PropTypes.number,
  textBreakStrategy: PropTypes.oneOf(['simple', 'highQuality', 'balanced']),
  onLayout: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  pressRetentionOffset: module182,
  selectable: PropTypes.bool,
  selectionColor: module58,
  suppressHighlighting: PropTypes.bool,
  style: module67,
  testID: PropTypes.string,
  nativeID: PropTypes.string,
  allowFontScaling: PropTypes.bool,
  maxFontSizeMultiplier: PropTypes.number,
  accessible: PropTypes.bool,
  adjustsFontSizeToFit: PropTypes.bool,
  minimumFontScale: PropTypes.number,
  disabled: PropTypes.bool,
};
