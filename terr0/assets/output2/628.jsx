var module404 = require('./404');

import React from 'react';
import module2 from './2';
import PropTypes from 'prop-types';

var module356 = require('./356'),
  module358 = require('./358'),
  module361 = require('./361'),
  module362 = require('./362'),
  module629 = require('./629'),
  module630 = require('./630'),
  b = 'ios' === module2.Platform.OS,
  h = module2.I18nManager.isRTL;

class w {
  constructor(t) {
    var module357;
    module356.default(this, o);
    module357 = module358.default(this, module361.default(o).call(this, t));
    if ((t.dotColor && !t.inactiveDotColor) || (!t.dotColor && t.inactiveDotColor))
      console.warn('react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`');
    if ((t.dotElement && !t.inactiveDotElement) || (!t.dotElement && t.inactiveDotElement))
      console.warn('react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`');
    if (t.tappableDots && !t.carouselRef) console.warn('react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`');
    return module357;
  }

  _needsRTLAdaptations() {
    var t = this.props.vertical;
    return h && !b && !t;
  }

  render() {
    var t = this.props,
      o = t.dotsLength,
      n = t.containerStyle,
      l = t.vertical,
      s = t.accessibilityLabel;
    if (!o || o < 2) return false;
    var c = [
      module630.default.sliderPagination,
      {
        flexDirection: l ? 'column' : this._needsRTLAdaptations() ? 'row-reverse' : 'row',
      },
      n || {},
    ];
    return (
      <module2.View pointerEvents="box-none" style={c} accessible={!!s} accessibilityLabel={s}>
        {this.dots}
      </module2.View>
    );
  }

  _activeDotIndex() {
    var t = this.props,
      o = t.activeDotIndex,
      n = t.dotsLength;
    return this._needsRTLAdaptations() ? n - o - 1 : o;
  }

  dots() {
    var t = this.props,
      o = t.activeOpacity,
      n = t.carouselRef,
      l = t.dotsLength,
      s = t.dotColor,
      c = t.dotContainerStyle,
      p = t.dotElement,
      v = t.dotStyle,
      y = t.inactiveDotColor,
      D = t.inactiveDotElement,
      b = t.inactiveDotOpacity,
      h = t.inactiveDotScale,
      w = t.inactiveDotStyle,
      T = t.renderDots,
      P = t.tappableDots;
    if (T) return T(this._activeDotIndex, l, this);

    for (
      var S = (
          <module629.default
            carouselRef={n}
            tappable={P && undefined !== n}
            activeOpacity={o}
            color={s}
            containerStyle={c}
            style={v}
            inactiveColor={y}
            inactiveOpacity={b}
            inactiveScale={h}
            inactiveStyle={w}
          />
        ),
        C = [],
        E = 0;
      E < l;
      E++
    ) {
      var V = E === this._activeDotIndex;
      C.push(
        React.cloneElement((V ? p : D) || S, {
          key: 'pagination-dot-' + E,
          active: E === this._activeDotIndex,
          index: E,
        })
      );
    }

    return C;
  }
}

export default w;
w.propTypes = {
  activeDotIndex: PropTypes.number.isRequired,
  dotsLength: PropTypes.number.isRequired,
  activeOpacity: PropTypes.number,
  carouselRef: PropTypes.object,
  containerStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  dotColor: PropTypes.string,
  dotContainerStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  dotElement: PropTypes.element,
  dotStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  inactiveDotColor: PropTypes.string,
  inactiveDotElement: PropTypes.element,
  inactiveDotOpacity: PropTypes.number,
  inactiveDotScale: PropTypes.number,
  inactiveDotStyle: module2.ViewPropTypes ? module2.ViewPropTypes.style : module2.View.propTypes.style,
  renderDots: PropTypes.func,
  tappableDots: PropTypes.bool,
  vertical: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
};
w.defaultProps = {
  inactiveDotOpacity: 0.5,
  inactiveDotScale: 0.5,
  tappableDots: false,
  vertical: false,
};
