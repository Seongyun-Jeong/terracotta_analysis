import PropTypes from 'prop-types';
import module2 from './2';
var o = PropTypes.shape({
  title: PropTypes.string,
  key: PropTypes.string.isRequired,
});
exports.NavigationRoutePropType = o;
var l = PropTypes.shape({
  routes: PropTypes.arrayOf(o).isRequired,
  index: PropTypes.number.isRequired,
});
exports.NavigationStatePropType = l;
var f = {
  panX: PropTypes.object.isRequired,
  offsetX: PropTypes.object.isRequired,
  layout: PropTypes.shape({
    measured: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  navigationState: l.isRequired,
  position: PropTypes.object.isRequired,
  jumpTo: PropTypes.func.isRequired,
  useNativeDriver: PropTypes.bool,
};
exports.SceneRendererPropType = f;
var s = {
  layout: PropTypes.shape({
    measured: PropTypes.bool.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }).isRequired,
  navigationState: l.isRequired,
  panX: PropTypes.instanceOf(module2.Animated.Value).isRequired,
  offsetX: PropTypes.instanceOf(module2.Animated.Value).isRequired,
  canJumpToTab: PropTypes.func.isRequired,
  jumpTo: PropTypes.func.isRequired,
  animationEnabled: PropTypes.bool,
  swipeEnabled: PropTypes.bool,
  useNativeDriver: PropTypes.bool,
  onSwipeStart: PropTypes.func,
  onSwipeEnd: PropTypes.func,
  onAnimationEnd: PropTypes.func,
  children: PropTypes.node.isRequired,
};
exports.PagerRendererPropType = s;
