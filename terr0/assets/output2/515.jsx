import React from 'react';
import module2 from './2';

var module284 = require('./284'),
  module366 = require('./366'),
  module516 = require('./516'),
  f = function (t) {
    var f = t.items,
      v = t.activeItemKey,
      y = t.activeTintColor,
      b = t.activeBackgroundColor,
      C = t.inactiveTintColor,
      I = t.inactiveBackgroundColor,
      S = t.getLabel,
      k = t.renderIcon,
      p = t.onItemPress,
      w = t.itemsContainerStyle,
      P = t.itemStyle,
      E = t.labelStyle,
      T = t.activeLabelStyle,
      h = t.inactiveLabelStyle,
      B = t.iconContainerStyle,
      L = t.drawerPosition;
    return (
      <module2.View style={[s.container, w]}>
        {f.map(function (t, f) {
          var w,
            V = v === t.key,
            _ = V ? y : C,
            x = V ? b : I,
            j = {
              route: t,
              index: f,
              focused: V,
              tintColor: _,
            },
            z = k(j),
            A = S(j),
            D = 'string' == typeof A ? A : undefined,
            H = V ? T : h;

          return (
            <module516.default
              key={t.key}
              accessible
              accessibilityLabel={D}
              onPress={function () {
                p({
                  route: t,
                  focused: V,
                });
              }}
              delayPressIn={0}
            >
              <module366.SafeAreaView
                style={[
                  {
                    backgroundColor: x,
                  },
                  s.item,
                  P,
                ]}
                forceInset={
                  ((w = {}), module284.default(w, L, 'always'), module284.default(w, 'left' === L ? 'right' : 'left', 'never'), module284.default(w, 'vertical', 'never'), w)
                }
              >
                {z ? <module2.View style={[s.icon, V ? null : s.inactiveIcon, B]}>{z}</module2.View> : null}
                {'string' == typeof A ? (
                  <module2.Text
                    style={[
                      s.label,
                      {
                        color: _,
                      },
                      E,
                      H,
                    ]}
                  >
                    {A}
                  </module2.Text>
                ) : (
                  A
                )}
              </module366.SafeAreaView>
            </module516.default>
          );
        })}
      </module2.View>
    );
  };

f.defaultProps = {
  activeTintColor: '#2196f3',
  activeBackgroundColor: 'rgba(0, 0, 0, .04)',
  inactiveTintColor: 'rgba(0, 0, 0, .87)',
  inactiveBackgroundColor: 'transparent',
};
var s = module2.StyleSheet.create({
    container: {
      paddingVertical: 4,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginHorizontal: 16,
      width: 24,
      alignItems: 'center',
    },
    inactiveIcon: {
      opacity: 0.62,
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
    },
  }),
  v = f;
export default v;
