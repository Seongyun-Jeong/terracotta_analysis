var module11 = require('./11'),
  module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module32 = require('./32'),
  module36 = require('./36');

function h(t, n) {
  var o = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    if (n)
      s = s.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      });
    o.push.apply(o, s);
  }

  return o;
}

function f(t) {
  for (var o = 1; o < arguments.length; o++) {
    var s = null != arguments[o] ? arguments[o] : {};
    if (o % 2)
      h(Object(s), true).forEach(function (o) {
        module46(t, o, s[o]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(s));
    else
      h(Object(s)).forEach(function (n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(s, n));
      });
  }

  return t;
}

require('./43');

var React = require('react'),
  module75 = require('./75'),
  module234 = require('./234'),
  module3 = require('./3');

class _ {
  constructor(t, n) {
    var p;
    module22(this, h);

    (p = module30(this, module33(h).call(this, t, n)))._keyExtractor = function (t, n) {
      var o = p._subExtractor(n);

      return o ? o.key : String(n);
    };

    p._convertViewable = function (t) {
      module3(null != t.index, 'Received a broken ViewToken');

      var n = p._subExtractor(t.index);

      if (!n) return null;
      var o = n.section.keyExtractor || p.props.keyExtractor;
      return f({}, t, {
        index: n.index,
        key: o(t.item, n.index),
        section: n.section,
      });
    };

    p._onViewableItemsChanged = function (t) {
      var n = t.viewableItems,
        o = t.changed;
      if (p.props.onViewableItemsChanged)
        p.props.onViewableItemsChanged({
          viewableItems: n.map(p._convertViewable, module32(p)).filter(Boolean),
          changed: o.map(p._convertViewable, module32(p)).filter(Boolean),
        });
    };

    p._renderItem = function (t) {
      var n = t.item,
        o = t.index,
        s = p._subExtractor(o);

      if (!s) return null;
      var l = s.index;

      if (null == l) {
        var c = s.section;

        if (true === s.header) {
          var u = p.props.renderSectionHeader;
          return u
            ? u({
                section: c,
              })
            : null;
        }

        var h = p.props.renderSectionFooter;
        return h
          ? h({
              section: c,
            })
          : null;
      }

      var f = s.section.renderItem || p.props.renderItem,
        v = p._getSeparatorComponent(o, s);

      module3(f, 'no renderItem!');
      return (
        <b
          SeparatorComponent={v}
          LeadingSeparatorComponent={0 === l ? p.props.SectionSeparatorComponent : undefined}
          cellKey={s.key}
          index={l}
          item={n}
          leadingItem={s.leadingItem}
          leadingSection={s.leadingSection}
          onUpdateSeparator={p._onUpdateSeparator}
          prevCellKey={(p._subExtractor(o - 1) || {}).key}
          ref={function (t) {
            p._cellRefs[s.key] = t;
          }}
          renderItem={f}
          section={s.section}
          trailingItem={s.trailingItem}
          trailingSection={s.trailingSection}
        />
      );
    };

    p._onUpdateSeparator = function (t, n) {
      var o = p._cellRefs[t];
      if (o) o.updateSeparatorProps(n);
    };

    p._cellRefs = {};

    p._captureRef = function (t) {
      p._listRef = t;
    };

    p.state = p._computeState(t);
    return p;
  }

  scrollToLocation(t) {
    for (var n = t.itemIndex + 1, o = 0; o < t.sectionIndex; o++) n += this.props.sections[o].data.length + 2;

    var s = f({}, t, {
      index: n,
    });

    this._listRef.scrollToIndex(s);
  }

  getListRef() {
    return this._listRef;
  }
}

_.defaultProps = f({}, module234.defaultProps, {
  data: [],
});

var b = (function (t, ...args) {
  function n() {
    var t, c;
    module22(this, n);
    (c = module30(this, (t = module33(n)).call.apply(t, [this].concat(args)))).state = {
      separatorProps: {
        highlighted: false,
        leadingItem: c.props.item,
        leadingSection: c.props.leadingSection,
        section: c.props.section,
        trailingItem: c.props.trailingItem,
        trailingSection: c.props.trailingSection,
      },
      leadingSeparatorProps: {
        highlighted: false,
        leadingItem: c.props.leadingItem,
        leadingSection: c.props.leadingSection,
        section: c.props.section,
        trailingItem: c.props.item,
        trailingSection: c.props.trailingSection,
      },
    };
    c._separators = {
      highlight: function () {
        ['leading', 'trailing'].forEach(function (t) {
          return c._separators.updateProps(t, {
            highlighted: true,
          });
        });
      },
      unhighlight: function () {
        ['leading', 'trailing'].forEach(function (t) {
          return c._separators.updateProps(t, {
            highlighted: false,
          });
        });
      },
      updateProps: function (t, n) {
        var o = c.props,
          s = o.LeadingSeparatorComponent,
          l = o.cellKey,
          p = o.prevCellKey;
        if ('leading' === t && null != s)
          c.setState(function (t) {
            return {
              leadingSeparatorProps: f({}, t.leadingSeparatorProps, {}, n),
            };
          });
        else c.props.onUpdateSeparator(('leading' === t && p) || l, n);
      },
    };
    return c;
  }

  module36(n, t);
  module23(
    n,
    [
      {
        key: 'updateSeparatorProps',
        value: function (t) {
          this.setState(function (n) {
            return {
              separatorProps: f({}, n.separatorProps, {}, t),
            };
          });
        },
      },
      {
        key: 'render',
        value: function () {
          var t = this.props,
            n = t.LeadingSeparatorComponent,
            o = t.SeparatorComponent,
            s = t.item,
            l = t.index,
            c = t.section,
            p = this.props.renderItem({
              item: s,
              index: l,
              section: c,
              separators: this._separators,
            }),
            u = n && <n />,
            h = o && <o />;
          return u || h ? (
            <module75>
              {u}
              {p}
              {h}
            </module75>
          ) : (
            p
          );
        },
      },
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function (t, n) {
          return {
            separatorProps: f({}, n.separatorProps, {
              leadingItem: t.item,
              leadingSection: t.leadingSection,
              section: t.section,
              trailingItem: t.trailingItem,
              trailingSection: t.trailingSection,
            }),
            leadingSeparatorProps: f({}, n.leadingSeparatorProps, {
              leadingItem: t.leadingItem,
              leadingSection: t.leadingSection,
              section: t.section,
              trailingItem: t.item,
              trailingSection: t.trailingSection,
            }),
          };
        },
      },
    ]
  );
  return n;
})(React.Component);

function P(t, n) {
  if (!t) return null;

  for (var o = n - 1, s = 0; s < t.length; s++) {
    if (-1 === o || o === t[s].data.length) return t[s];
    if (o < t[s].data.length) return t[s].data[o];
    o -= t[s].data.length + 2;
  }

  return null;
}

module.exports = _;
