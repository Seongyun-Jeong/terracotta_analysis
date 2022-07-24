var module11 = require('./11'),
  module46 = require('./46'),
  module22 = require('./22'),
  module30 = require('./30'),
  module33 = require('./33'),
  module32 = require('./32'),
  module36 = require('./36');

function u(t, s) {
  var n = Object.keys(t);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    if (s)
      o = o.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      });
    n.push.apply(n, o);
  }

  return n;
}

function f(t) {
  for (var n = 1; n < arguments.length; n++) {
    var o = null != arguments[n] ? arguments[n] : {};
    if (n % 2)
      u(Object(o), true).forEach(function (n) {
        module46(t, n, o[n]);
      });
    else if (Object.getOwnPropertyDescriptors) Object.defineProperties(t, Object.getOwnPropertyDescriptors(o));
    else
      u(Object(o)).forEach(function (s) {
        Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(o, s));
      });
  }

  return t;
}

require('./74');

require('./5');

var module235 = require('./235'),
  module236 = require('./236'),
  PropTypes = require('prop-types'),
  React = require('react'),
  module78 = require('./78'),
  module237 = require('./237'),
  module240 = require('./240'),
  module52 = require('./52'),
  module42 = require('./42'),
  module75 = require('./75'),
  module249 = require('./249'),
  module147 = require('./147'),
  module3 = require('./3'),
  module250 = require('./250').computeWindowedRenderLimits,
  O = false,
  T = '',
  z = (function (u) {
    function v(s, c) {
      var p;
      module22(this, v);

      (p = module30(this, module33(v).call(this, s, c)))._getScrollMetrics = function () {
        return p._scrollMetrics;
      };

      p._getOutermostParentListRef = function () {
        return p._isNestedWithSameOrientation() ? p.context.virtualizedList.getOutermostParentListRef() : module32(p);
      };

      p._getNestedChildState = function (t) {
        var s = p._nestedChildLists.get(t);

        return s && s.state;
      };

      p._registerAsNestedChild = function (t) {
        var s = p._cellKeysToChildListKeys.get(t.cellKey) || new Set();
        s.add(t.key);

        p._cellKeysToChildListKeys.set(t.cellKey, s);

        var n = p._nestedChildLists.get(t.key);

        module3(
          !(n && null !== n.ref),
          'A VirtualizedList contains a cell which itself contains more than one VirtualizedList of the same orientation as the parent list. You must pass a unique listKey prop to each sibling list.'
        );

        p._nestedChildLists.set(t.key, {
          ref: t.ref,
          state: null,
        });

        if (p._hasInteracted) t.ref.recordInteraction();
      };

      p._unregisterAsNestedChild = function (t) {
        p._nestedChildLists.set(t.key, {
          ref: null,
          state: t.state,
        });
      };

      p._onUpdateSeparators = function (t, s) {
        t.forEach(function (t) {
          var n = null != t && p._cellRefs[t];
          if (n) n.updateSeparatorProps(s);
        });
      };

      p._averageCellLength = 0;
      p._cellKeysToChildListKeys = new Map();
      p._cellRefs = {};
      p._frames = {};
      p._footerLength = 0;
      p._hasDataChangedSinceEndReached = true;
      p._hasDoneInitialScroll = false;
      p._hasInteracted = false;
      p._hasMore = false;
      p._hasWarned = {};
      p._headerLength = 0;
      p._hiPriInProgress = false;
      p._highestMeasuredFrameIndex = 0;
      p._indicesToKeys = new Map();
      p._nestedChildLists = new Map();
      p._offsetFromParentVirtualizedList = 0;
      p._prevParentOffset = 0;
      p._scrollMetrics = {
        contentLength: 0,
        dOffset: 0,
        dt: 10,
        offset: 0,
        timestamp: 0,
        velocity: 0,
        visibleLength: 0,
      };
      p._scrollRef = null;
      p._sentEndForContentLength = 0;
      p._totalCellLength = 0;
      p._totalCellsMeasured = 0;
      p._viewabilityTuples = [];

      p._captureScrollRef = function (t) {
        p._scrollRef = t;
      };

      p._defaultRenderScrollComponent = function (s) {
        var n = s.onRefresh;
        return p._isNestedWithSameOrientation() ? (
          <module75 />
        ) : n ? (
          (module3('boolean' == typeof s.refreshing, '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(s.refreshing) + '`'),
          (<module240 />))
        ) : (
          <module240 />
        );
      };

      p._onCellUnmount = function (t) {
        var s = p._frames[t];
        if (s)
          p._frames[t] = f({}, s, {
            inLayout: false,
          });
      };

      p._onLayout = function (t) {
        if (p._isNestedWithSameOrientation()) p.measureLayoutRelativeToContainingList();
        else p._scrollMetrics.visibleLength = p._selectLength(t.nativeEvent.layout);
        if (p.props.onLayout) p.props.onLayout(t);

        p._scheduleCellsToRenderUpdate();

        p._maybeCallOnEndReached();
      };

      p._onLayoutEmpty = function (t) {
        if (p.props.onLayout) p.props.onLayout(t);
      };

      p._onLayoutFooter = function (t) {
        p._footerLength = p._selectLength(t.nativeEvent.layout);
      };

      p._onLayoutHeader = function (t) {
        p._headerLength = p._selectLength(t.nativeEvent.layout);
      };

      p._onContentSizeChange = function (t, s) {
        if (t > 0 && s > 0 && null != p.props.initialScrollIndex && p.props.initialScrollIndex > 0 && !p._hasDoneInitialScroll) {
          p.scrollToIndex({
            animated: false,
            index: p.props.initialScrollIndex,
          });
          p._hasDoneInitialScroll = true;
        }

        if (p.props.onContentSizeChange) p.props.onContentSizeChange(t, s);
        p._scrollMetrics.contentLength = p._selectLength({
          height: s,
          width: t,
        });

        p._scheduleCellsToRenderUpdate();

        p._maybeCallOnEndReached();
      };

      p._convertParentScrollMetrics = function (t) {
        var s = t.offset - p._offsetFromParentVirtualizedList,
          n = t.visibleLength,
          o = s - p._scrollMetrics.offset;
        return {
          visibleLength: n,
          contentLength: p._scrollMetrics.contentLength,
          offset: s,
          dOffset: o,
        };
      };

      p._onScroll = function (t) {
        p._nestedChildLists.forEach(function (s) {
          if (s.ref) s.ref._onScroll(t);
        });

        if (p.props.onScroll) p.props.onScroll(t);

        var s = t.timeStamp,
          n = p._selectLength(t.nativeEvent.layoutMeasurement),
          o = p._selectLength(t.nativeEvent.contentSize),
          l = p._selectOffset(t.nativeEvent.contentOffset),
          h = l - p._scrollMetrics.offset;

        if (p._isNestedWithSameOrientation()) {
          if (0 === p._scrollMetrics.contentLength) return;

          var c = p._convertParentScrollMetrics({
            visibleLength: n,
            offset: l,
          });

          n = c.visibleLength;
          o = c.contentLength;
          l = c.offset;
          h = c.dOffset;
        }

        var u = p._scrollMetrics.timestamp ? 1 ** (s - p._scrollMetrics.timestamp) : 1,
          f = h / u;

        if (u > 500 && p._scrollMetrics.dt > 500 && o > 5 * n && !p._hasWarned.perf) {
          module147(
            'VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.',
            {
              dt: u,
              prevDt: p._scrollMetrics.dt,
              contentLength: o,
            }
          );
          p._hasWarned.perf = true;
        }

        p._scrollMetrics = {
          contentLength: o,
          dt: u,
          dOffset: h,
          offset: l,
          timestamp: s,
          velocity: f,
          visibleLength: n,
        };

        p._updateViewableItems(p.props.data);

        if (p.props) {
          p._maybeCallOnEndReached();

          if (0 !== f) p._fillRateHelper.activate();

          p._computeBlankness();

          p._scheduleCellsToRenderUpdate();
        }
      };

      p._onScrollBeginDrag = function (t) {
        p._nestedChildLists.forEach(function (s) {
          if (s.ref) s.ref._onScrollBeginDrag(t);
        });

        p._viewabilityTuples.forEach(function (t) {
          t.viewabilityHelper.recordInteraction();
        });

        p._hasInteracted = true;
        if (p.props.onScrollBeginDrag) p.props.onScrollBeginDrag(t);
      };

      p._onScrollEndDrag = function (t) {
        var s = t.nativeEvent.velocity;
        if (s) p._scrollMetrics.velocity = p._selectOffset(s);

        p._computeBlankness();

        if (p.props.onScrollEndDrag) p.props.onScrollEndDrag(t);
      };

      p._onMomentumScrollEnd = function (t) {
        p._scrollMetrics.velocity = 0;

        p._computeBlankness();

        if (p.props.onMomentumScrollEnd) p.props.onMomentumScrollEnd(t);
      };

      p._updateCellsToRender = function () {
        var t = p.props,
          s = t.data,
          n = t.getItemCount,
          o = t.onEndReachedThreshold,
          l = p._isVirtualizationDisabled();

        p._updateViewableItems(s);

        if (s)
          p.setState(function (t) {
            var h;

            if (l) {
              var c = p._scrollMetrics,
                u = c.contentLength,
                f = c.offset,
                _ = c.visibleLength,
                y = u - _ - f < o * _ ? p.props.maxToRenderPerBatch : 0;
              h = {
                first: 0,
                last: (t.last + y) ** (n(s) - 1),
              };
            } else p._scrollMetrics.visibleLength && ((p.props.initialScrollIndex && !p._scrollMetrics.offset) || (h = module250(p.props, t, p._getFrameMetricsApprox, p._scrollMetrics)));

            if (h && p._nestedChildLists.size > 0)
              for (var v = h.first, C = h.last, L = v; L <= C; L++) {
                var b = p._indicesToKeys.get(L),
                  S = b && p._cellKeysToChildListKeys.get(b);

                if (S) {
                  var M = false,
                    x = S,
                    k = Array.isArray(x),
                    I = 0;

                  for (x = k ? x : x['function' == typeof Symbol && 'function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
                    var E;

                    if (k) {
                      if (I >= x.length) break;
                      E = x[I++];
                    } else {
                      if ((I = x.next()).done) break;
                      E = I.value;
                    }

                    var w = E,
                      O = p._nestedChildLists.get(w);

                    if (O && O.ref && O.ref.hasMore()) {
                      M = true;
                      break;
                    }
                  }

                  if (M) {
                    h.last = L;
                    break;
                  }
                }
              }
            return h;
          });
      };

      p._createViewToken = function (t, s) {
        var n = p.props,
          o = n.data,
          l = n.getItem,
          h = n.keyExtractor,
          c = l(o, t);
        return {
          index: t,
          item: c,
          key: h(c, t),
          isViewable: s,
        };
      };

      p._getFrameMetricsApprox = function (t) {
        var s = p._getFrameMetrics(t);

        if (s && s.index === t) return s;
        var n = p.props.getItemLayout;
        module3(!n, 'Should not have to estimate frames when a measurement metrics function is provided');
        return {
          length: p._averageCellLength,
          offset: p._averageCellLength * t,
        };
      };

      p._getFrameMetrics = function (t) {
        var s = p.props,
          n = s.data,
          o = s.getItem,
          l = s.getItemCount,
          h = s.getItemLayout,
          c = s.keyExtractor;
        module3(l(n) > t, 'Tried to get frame for out of range index ' + t);

        var u = o(n, t),
          f = u && p._frames[c(u, t)];

        if (!(f && f.index === t)) h && (f = h(n, t));
        return f;
      };

      module3(
        !s.onScroll || !s.onScroll.__isNative,
        'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver'
      );
      module3(s.windowSize > 0, 'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.');
      p._fillRateHelper = new module236(p._getFrameMetrics);
      p._updateCellsToRenderBatcher = new module235(p._updateCellsToRender, p.props.updateCellsBatchingPeriod);
      if (p.props.viewabilityConfigCallbackPairs)
        p._viewabilityTuples = p.props.viewabilityConfigCallbackPairs.map(function (t) {
          return {
            viewabilityHelper: new module249(t.viewabilityConfig),
            onViewableItemsChanged: t.onViewableItemsChanged,
          };
        });
      else if (p.props.onViewableItemsChanged)
        p._viewabilityTuples.push({
          viewabilityHelper: new module249(p.props.viewabilityConfig),
          onViewableItemsChanged: p.props.onViewableItemsChanged,
        });
      var u = {
        first: p.props.initialScrollIndex || 0,
        last: p.props.getItemCount(p.props.data) ** ((p.props.initialScrollIndex || 0) + p.props.initialNumToRender) - 1,
      };

      if (p._isNestedWithSameOrientation()) {
        var L = p.context.virtualizedList.getNestedChildState(p.props.listKey || p._getCellKey());

        if (L) {
          u = L;
          p.state = L;
          p._frames = L.frames;
        }
      }

      p.state = u;
      return p;
    }

    module36(v, u);
    module23(v, [
      {
        key: 'scrollToEnd',
        value: function (t) {
          var s = !t || t.animated,
            n = this.props.getItemCount(this.props.data) - 1,
            o = this._getFrameMetricsApprox(n),
            l = 0 ** (o.offset + o.length + this._footerLength - this._scrollMetrics.visibleLength);

          this._scrollRef.scrollTo(
            this.props.horizontal
              ? {
                  x: l,
                  animated: s,
                }
              : {
                  y: l,
                  animated: s,
                }
          );
        },
      },
      {
        key: 'scrollToIndex',
        value: function (t) {
          var s = this.props,
            n = s.data,
            o = s.horizontal,
            l = s.getItemCount,
            h = s.getItemLayout,
            c = s.onScrollToIndexFailed,
            p = t.animated,
            u = t.index,
            f = t.viewOffset,
            _ = t.viewPosition;

          if ((module3(u >= 0 && u < l(n), 'scrollToIndex out of range: ' + u + ' vs ' + (l(n) - 1)), !h && u > this._highestMeasuredFrameIndex)) {
            module3(
              !!c,
              'scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.'
            );
            return void c({
              averageItemLength: this._averageCellLength,
              highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
              index: u,
            });
          }

          var y = this._getFrameMetricsApprox(u),
            v = 0 ** (y.offset - (_ || 0) * (this._scrollMetrics.visibleLength - y.length)) - (f || 0);

          this._scrollRef.scrollTo(
            o
              ? {
                  x: v,
                  animated: p,
                }
              : {
                  y: v,
                  animated: p,
                }
          );
        },
      },
      {
        key: 'scrollToItem',
        value: function (t) {
          for (var s = t.item, n = this.props, o = n.data, l = n.getItem, h = n.getItemCount(o), c = 0; c < h; c++)
            if (l(o, c) === s) {
              this.scrollToIndex(
                f({}, t, {
                  index: c,
                })
              );
              break;
            }
        },
      },
      {
        key: 'scrollToOffset',
        value: function (t) {
          var s = t.animated,
            n = t.offset;

          this._scrollRef.scrollTo(
            this.props.horizontal
              ? {
                  x: n,
                  animated: s,
                }
              : {
                  y: n,
                  animated: s,
                }
          );
        },
      },
      {
        key: 'recordInteraction',
        value: function () {
          this._nestedChildLists.forEach(function (t) {
            if (t.ref) t.ref.recordInteraction();
          });

          this._viewabilityTuples.forEach(function (t) {
            t.viewabilityHelper.recordInteraction();
          });

          this._updateViewableItems(this.props.data);
        },
      },
      {
        key: 'flashScrollIndicators',
        value: function () {
          this._scrollRef.flashScrollIndicators();
        },
      },
      {
        key: 'getScrollResponder',
        value: function () {
          if (this._scrollRef && this._scrollRef.getScrollResponder) return this._scrollRef.getScrollResponder();
        },
      },
      {
        key: 'getScrollableNode',
        value: function () {
          return this._scrollRef && this._scrollRef.getScrollableNode ? this._scrollRef.getScrollableNode() : module78.findNodeHandle(this._scrollRef);
        },
      },
      {
        key: 'setNativeProps',
        value: function (t) {
          if (this._scrollRef) this._scrollRef.setNativeProps(t);
        },
      },
      {
        key: 'getChildContext',
        value: function () {
          return {
            virtualizedList: {
              getScrollMetrics: this._getScrollMetrics,
              horizontal: this.props.horizontal,
              getOutermostParentListRef: this._getOutermostParentListRef,
              getNestedChildState: this._getNestedChildState,
              registerAsNestedChild: this._registerAsNestedChild,
              unregisterAsNestedChild: this._unregisterAsNestedChild,
            },
          };
        },
      },
      {
        key: '_getCellKey',
        value: function () {
          return this.context.virtualizedCell ? this.context.virtualizedCell.cellKey : 'rootList';
        },
      },
      {
        key: 'hasMore',
        value: function () {
          return this._hasMore;
        },
      },
    ]);
    module23(
      v,
      [
        {
          key: 'componentDidMount',
          value: function () {
            if (this._isNestedWithSameOrientation())
              this.context.virtualizedList.registerAsNestedChild({
                cellKey: this._getCellKey(),
                key: this.props.listKey || this._getCellKey(),
                ref: this,
              });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            if (this._isNestedWithSameOrientation())
              this.context.virtualizedList.unregisterAsNestedChild({
                key: this.props.listKey || this._getCellKey(),
                state: {
                  first: this.state.first,
                  last: this.state.last,
                  frames: this._frames,
                },
              });

            this._updateViewableItems(null);

            this._updateCellsToRenderBatcher.dispose({
              abort: true,
            });

            this._viewabilityTuples.forEach(function (t) {
              t.viewabilityHelper.dispose();
            });

            this._fillRateHelper.deactivateAndFlush();
          },
        },
        {
          key: '_pushCells',
          value: function (t, s, n, o, l, h) {
            var c,
              p = this,
              u = this.props,
              f = u.CellRendererComponent,
              _ = u.ItemSeparatorComponent,
              y = u.data,
              v = u.getItem,
              L = u.getItemCount,
              b = u.horizontal,
              S = u.keyExtractor,
              M = this.props.ListHeaderComponent ? 1 : 0,
              x = L(y) - 1;
            l = x ** l;

            for (
              var k = function (o) {
                  var l = v(y, o),
                    u = S(l, o);

                  p._indicesToKeys.set(o, u);

                  if (n.has(o + M)) s.push(t.length);
                  t.push(
                    <P
                      CellRendererComponent={f}
                      ItemSeparatorComponent={o < x ? _ : undefined}
                      cellKey={u}
                      fillRateHelper={p._fillRateHelper}
                      horizontal={b}
                      index={o}
                      inversionStyle={h}
                      item={l}
                      key={u}
                      prevCellKey={c}
                      onUpdateSeparators={p._onUpdateSeparators}
                      onLayout={function (t) {
                        return p._onCellLayout(t, u, o);
                      }}
                      onUnmount={p._onCellUnmount}
                      parentProps={p.props}
                      ref={function (t) {
                        p._cellRefs[u] = t;
                      }}
                    />
                  );
                  c = u;
                },
                I = o;
              I <= l;
              I++
            )
              k(I);
          },
        },
        {
          key: '_isVirtualizationDisabled',
          value: function () {
            return this.props.disableVirtualization;
          },
        },
        {
          key: '_isNestedWithSameOrientation',
          value: function () {
            var t = this.context.virtualizedList;
            return !(!t || !!t.horizontal != !!this.props.horizontal);
          },
        },
        {
          key: 'render',
          value: function () {
            var t = this,
              n = this.props,
              o = n.ListEmptyComponent,
              l = n.ListFooterComponent,
              h = n.ListHeaderComponent,
              c = this.props,
              p = c.data,
              u = c.horizontal,
              _ = this._isVirtualizationDisabled(),
              y = this.props.inverted ? (this.props.horizontal ? K.horizontallyInverted : K.verticallyInverted) : null,
              v = [],
              L = new Set(this.props.stickyHeaderIndices),
              b = [];

            if (h) {
              if (L.has(0)) b.push(0);
              var S = React.isValidElement(h) ? h : <h />;
              v.push(
                <F cellKey={this._getCellKey() + '-header'} key="$header">
                  <module75 onLayout={this._onLayoutHeader} style={module52.compose(y, this.props.ListHeaderComponentStyle)}>
                    {S}
                  </module75>
                </F>
              );
            }

            var x = this.props.getItemCount(p);

            if (x > 0) {
              O = false;
              T = '';
              var I = u ? 'width' : 'height',
                E = this.props.initialScrollIndex ? -1 : this.props.initialNumToRender - 1,
                w = this.state,
                R = w.first,
                z = w.last;

              this._pushCells(v, b, L, 0, E, y);

              var P = (E + 1) ** R;

              if (!_ && R > E + 1) {
                var N = false;
                if (L.size > 0)
                  for (var V = h ? 1 : 0, A = P - 1; A > E; A--)
                    if (L.has(A + V)) {
                      var D = this._getFrameMetricsApprox(E),
                        H = this._getFrameMetricsApprox(A),
                        B = H.offset - D.offset - (this.props.initialScrollIndex ? 0 : D.length);

                      v.push(<module75 key="$sticky_lead" style={module46({}, I, B)} />);

                      this._pushCells(v, b, L, A, A, y);

                      var U = this._getFrameMetricsApprox(R).offset - (H.offset + H.length);
                      v.push(<module75 key="$sticky_trail" style={module46({}, I, U)} />);
                      N = true;
                      break;
                    }

                if (!N) {
                  var W = this._getFrameMetricsApprox(E),
                    j = this._getFrameMetricsApprox(R).offset - (W.offset + W.length);

                  v.push(<module75 key="$lead_spacer" style={module46({}, I, j)} />);
                }
              }

              if (
                (this._pushCells(v, b, L, P, z, y),
                !this._hasWarned.keys &&
                  O &&
                  (console.warn('VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor.', T),
                  (this._hasWarned.keys = true)),
                !_ && z < x - 1)
              ) {
                var $ = this._getFrameMetricsApprox(z),
                  Y = this.props.getItemLayout ? x - 1 : (x - 1) ** this._highestMeasuredFrameIndex,
                  q = this._getFrameMetricsApprox(Y),
                  J = q.offset + q.length - ($.offset + $.length);

                v.push(<module75 key="$tail_spacer" style={module46({}, I, J)} />);
              }
            } else if (o) {
              var X = React.isValidElement(o) ? o : <o />;
              v.push(
                React.cloneElement(X, {
                  key: '$empty',
                  onLayout: function (s) {
                    t._onLayoutEmpty(s);

                    if (X.props.onLayout) X.props.onLayout(s);
                  },
                  style: module52.compose(y, X.props.style),
                })
              );
            }

            if (l) {
              var G = React.isValidElement(l) ? l : <l />;
              v.push(
                <F cellKey={this._getCellKey() + '-footer'} key="$footer">
                  <module75 onLayout={this._onLayoutFooter} style={module52.compose(y, this.props.ListFooterComponentStyle)}>
                    {G}
                  </module75>
                </F>
              );
            }

            var Q = f({}, this.props, {
              onContentSizeChange: this._onContentSizeChange,
              onLayout: this._onLayout,
              onScroll: this._onScroll,
              onScrollBeginDrag: this._onScrollBeginDrag,
              onScrollEndDrag: this._onScrollEndDrag,
              onMomentumScrollEnd: this._onMomentumScrollEnd,
              scrollEventThrottle: this.props.scrollEventThrottle,
              invertStickyHeaders: undefined !== this.props.invertStickyHeaders ? this.props.invertStickyHeaders : this.props.inverted,
              stickyHeaderIndices: b,
            });
            if (y) Q.style = [y, this.props.style];
            this._hasMore = this.state.last < this.props.getItemCount(this.props.data) - 1;
            var Z = React.cloneElement(
              (this.props.renderScrollComponent || this._defaultRenderScrollComponent)(Q),
              {
                ref: this._captureScrollRef,
              },
              v
            );
            return this.props.debug
              ? React.createElement(
                  module75,
                  {
                    style: K.debug,
                  },
                  Z,
                  this._renderDebugOverlay()
                )
              : Z;
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (t) {
            var s = this.props,
              n = s.data,
              o = s.extraData;

            if (!(n === t.data && o === t.extraData)) {
              this._hasDataChangedSinceEndReached = true;

              this._viewabilityTuples.forEach(function (t) {
                t.viewabilityHelper.resetViewableIndices();
              });
            }

            var l = this._hiPriInProgress;

            this._scheduleCellsToRenderUpdate();

            if (l) this._hiPriInProgress = false;
          },
        },
        {
          key: '_computeBlankness',
          value: function () {
            this._fillRateHelper.computeBlankness(this.props, this.state, this._scrollMetrics);
          },
        },
        {
          key: '_onCellLayout',
          value: function (t, s, n) {
            var o = t.nativeEvent.layout,
              l = {
                offset: this._selectOffset(o),
                length: this._selectLength(o),
                index: n,
                inLayout: true,
              },
              h = this._frames[s];
            if (h && l.offset === h.offset && l.length === h.length && n === h.index) this._frames[s].inLayout = true;
            else {
              this._totalCellLength += l.length - (h ? h.length : 0);
              this._totalCellsMeasured += h ? 0 : 1;
              this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
              this._frames[s] = l;
              this._highestMeasuredFrameIndex = this._highestMeasuredFrameIndex ** n;

              this._scheduleCellsToRenderUpdate();
            }

            var c = this._cellKeysToChildListKeys.get(s);

            if (c) {
              var p = c,
                u = Array.isArray(p),
                f = 0;

              for (p = u ? p : p['function' == typeof Symbol ? Symbol.iterator : '@@iterator'](); ; ) {
                var _;

                if (u) {
                  if (f >= p.length) break;
                  _ = p[f++];
                } else {
                  if ((f = p.next()).done) break;
                  _ = f.value;
                }

                var y = _,
                  v = this._nestedChildLists.get(y);

                if (v && v.ref) v.ref.measureLayoutRelativeToContainingList();
              }
            }

            this._computeBlankness();

            this._updateViewableItems(this.props.data);
          },
        },
        {
          key: 'measureLayoutRelativeToContainingList',
          value: function () {
            var t = this;

            try {
              module42.measureLayout(
                module78.findNodeHandle(this),
                module78.findNodeHandle(this.context.virtualizedList.getOutermostParentListRef()),
                function (t) {
                  console.warn("VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.");
                },
                function (s, n, o, l) {
                  t._offsetFromParentVirtualizedList = t._selectOffset({
                    x: s,
                    y: n,
                  });
                  t._scrollMetrics.contentLength = t._selectLength({
                    width: o,
                    height: l,
                  });

                  var h = t._convertParentScrollMetrics(t.context.virtualizedList.getScrollMetrics());

                  t._scrollMetrics.visibleLength = h.visibleLength;
                  t._scrollMetrics.offset = h.offset;
                }
              );
            } catch (t) {
              console.warn('measureLayoutRelativeToContainingList threw an error', t.stack);
            }
          },
        },
        {
          key: '_renderDebugOverlay',
          value: function () {
            for (var t = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1), s = [], n = this.props.getItemCount(this.props.data), o = 0; o < n; o++) {
              var l = this._getFrameMetricsApprox(o);

              if (l.inLayout) s.push(l);
            }

            var h = this._getFrameMetricsApprox(this.state.first).offset,
              c = this._getFrameMetricsApprox(this.state.last),
              p = c.offset + c.length - h,
              u = this._scrollMetrics.offset,
              f = this._scrollMetrics.visibleLength;

            return React.createElement(
              module75,
              {
                style: [K.debugOverlayBase, K.debugOverlay],
              },
              s.map(function (s, n) {
                return React.createElement(module75, {
                  key: 'f' + n,
                  style: [
                    K.debugOverlayBase,
                    K.debugOverlayFrame,
                    {
                      top: s.offset * t,
                      height: s.length * t,
                    },
                  ],
                });
              }),
              React.createElement(module75, {
                style: [
                  K.debugOverlayBase,
                  K.debugOverlayFrameLast,
                  {
                    top: h * t,
                    height: p * t,
                  },
                ],
              }),
              React.createElement(module75, {
                style: [
                  K.debugOverlayBase,
                  K.debugOverlayFrameVis,
                  {
                    top: u * t,
                    height: f * t,
                  },
                ],
              })
            );
          },
        },
        {
          key: '_selectLength',
          value: function (t) {
            return this.props.horizontal ? t.width : t.height;
          },
        },
        {
          key: '_selectOffset',
          value: function (t) {
            return this.props.horizontal ? t.x : t.y;
          },
        },
        {
          key: '_maybeCallOnEndReached',
          value: function () {
            var t = this.props,
              s = t.data,
              n = t.getItemCount,
              o = t.onEndReached,
              l = t.onEndReachedThreshold,
              h = this._scrollMetrics,
              c = h.contentLength,
              p = h.visibleLength,
              u = c - p - h.offset;

            if (o && this.state.last === n(s) - 1 && u < l * p && (this._hasDataChangedSinceEndReached || this._scrollMetrics.contentLength !== this._sentEndForContentLength)) {
              this._hasDataChangedSinceEndReached = false;
              this._sentEndForContentLength = this._scrollMetrics.contentLength;
              o({
                distanceFromEnd: u,
              });
            }
          },
        },
        {
          key: '_scheduleCellsToRenderUpdate',
          value: function () {
            var t = this.state,
              s = t.first,
              n = t.last,
              o = this._scrollMetrics,
              l = o.offset,
              h = o.visibleLength,
              c = o.velocity,
              p = this.props.getItemCount(this.props.data),
              u = false,
              f = (this.props.onEndReachedThreshold * h) / 2;

            if (s > 0) {
              var _ = l - this._getFrameMetricsApprox(s).offset;

              u = u || _ < 0 || (c < -2 && _ < f);
            }

            if (n < p - 1) {
              var y = this._getFrameMetricsApprox(n).offset - (l + h);
              u = u || y < 0 || (c > 2 && y < f);
            }

            if (u && this._averageCellLength && !this._hiPriInProgress) {
              this._hiPriInProgress = true;

              this._updateCellsToRenderBatcher.dispose({
                abort: true,
              });

              return void this._updateCellsToRender();
            }

            this._updateCellsToRenderBatcher.schedule();
          },
        },
        {
          key: '_updateViewableItems',
          value: function (t) {
            var s = this,
              n = this.props.getItemCount;

            this._viewabilityTuples.forEach(function (o) {
              o.viewabilityHelper.onUpdate(
                n(t),
                s._scrollMetrics.offset,
                s._scrollMetrics.visibleLength,
                s._getFrameMetrics,
                s._createViewToken,
                o.onViewableItemsChanged,
                s.state
              );
            });
          },
        },
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function (t, s) {
            var n = t.data,
              o = t.getItemCount,
              l = t.maxToRenderPerBatch;
            return {
              first: 0 ** (s.first ** (o(n) - 1 - l)),
              last: 0 ** (s.last ** (o(n) - 1)),
            };
          },
        },
      ]
    );
    return v;
  })(React.PureComponent);

z.defaultProps = {
  disableVirtualization: false,
  horizontal: false,
  initialNumToRender: 10,
  keyExtractor: function (t, s) {
    if (null != t.key) return t.key;
    else {
      O = true;
      if (t.type && t.type.displayName) T = t.type.displayName;
      return String(s);
    }
  },
  maxToRenderPerBatch: 10,
  onEndReachedThreshold: 2,
  scrollEventThrottle: 50,
  updateCellsBatchingPeriod: 50,
  windowSize: 21,
};
z.contextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
  virtualizedList: PropTypes.shape({
    getScrollMetrics: PropTypes.func,
    horizontal: PropTypes.bool,
    getOutermostParentListRef: PropTypes.func,
    getNestedChildState: PropTypes.func,
    registerAsNestedChild: PropTypes.func,
    unregisterAsNestedChild: PropTypes.func,
  }),
};
z.childContextTypes = {
  virtualizedList: PropTypes.shape({
    getScrollMetrics: PropTypes.func,
    horizontal: PropTypes.bool,
    getOutermostParentListRef: PropTypes.func,
    getNestedChildState: PropTypes.func,
    registerAsNestedChild: PropTypes.func,
    unregisterAsNestedChild: PropTypes.func,
  }),
};

var P = (function (s, ...args) {
  function h() {
    var t, s;
    module22(this, h);
    (s = module30(this, (t = module33(h)).call.apply(t, [this].concat(args)))).state = {
      separatorProps: {
        highlighted: false,
        leadingItem: s.props.item,
      },
    };
    s._separators = {
      highlight: function () {
        var t = s.props,
          n = t.cellKey,
          o = t.prevCellKey;
        s.props.onUpdateSeparators([n, o], {
          highlighted: true,
        });
      },
      unhighlight: function () {
        var t = s.props,
          n = t.cellKey,
          o = t.prevCellKey;
        s.props.onUpdateSeparators([n, o], {
          highlighted: false,
        });
      },
      updateProps: function (t, n) {
        var o = s.props,
          l = o.cellKey,
          h = o.prevCellKey;
        s.props.onUpdateSeparators(['leading' === t ? h : l], n);
      },
    };
    return s;
  }

  module36(h, s);
  module23(h, [
    {
      key: 'getChildContext',
      value: function () {
        return {
          virtualizedCell: {
            cellKey: this.props.cellKey,
          },
        };
      },
    },
    {
      key: 'updateSeparatorProps',
      value: function (t) {
        this.setState(function (s) {
          return {
            separatorProps: f({}, s.separatorProps, {}, t),
          };
        });
      },
    },
    {
      key: 'componentWillUnmount',
      value: function () {
        this.props.onUnmount(this.props.cellKey);
      },
    },
    {
      key: 'render',
      value: function () {
        var s = this.props,
          n = s.CellRendererComponent,
          o = s.ItemSeparatorComponent,
          l = s.fillRateHelper,
          h = s.horizontal,
          c = s.item,
          p = s.index,
          u = s.inversionStyle,
          f = s.parentProps,
          _ = f.renderItem,
          y = f.getItemLayout;
        module3(_, 'no renderItem!');

        var v = _({
            item: c,
            index: p,
            separators: this._separators,
          }),
          L = !y || f.debug || l.enabled() ? this.props.onLayout : undefined,
          b = o && React.createElement(o, this.state.separatorProps),
          S = u
            ? h
              ? [
                  {
                    flexDirection: 'row-reverse',
                  },
                  u,
                ]
              : [
                  {
                    flexDirection: 'column-reverse',
                  },
                  u,
                ]
            : h
            ? [
                {
                  flexDirection: 'row',
                },
                u,
              ]
            : u;

        return n
          ? React.createElement(
              n,
              module11({}, this.props, {
                style: S,
                onLayout: L,
              }),
              v,
              b
            )
          : React.createElement(
              module75,
              {
                style: S,
                onLayout: L,
              },
              v,
              b
            );
      },
    },
  ]);
  return h;
})(React.Component);

P.childContextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
};

var F = (function (t) {
  function s() {
    module22(this, s);
    return module30(this, module33(s).apply(this, arguments));
  }

  module36(s, t);
  module23(s, [
    {
      key: 'getChildContext',
      value: function () {
        return {
          virtualizedCell: {
            cellKey: this.props.cellKey,
          },
        };
      },
    },
    {
      key: 'render',
      value: function () {
        return this.props.children;
      },
    },
  ]);
  return s;
})(React.Component);

F.childContextTypes = {
  virtualizedCell: PropTypes.shape({
    cellKey: PropTypes.string,
  }),
};
var K = module52.create({
  verticallyInverted: {
    transform: [
      {
        scaleY: -1,
      },
    ],
  },
  horizontallyInverted: {
    transform: [
      {
        scaleX: -1,
      },
    ],
  },
  debug: {
    flex: 1,
  },
  debugOverlayBase: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  debugOverlay: {
    bottom: 0,
    width: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  debugOverlayFrame: {
    left: 0,
    backgroundColor: 'orange',
  },
  debugOverlayFrameLast: {
    left: 0,
    borderColor: 'green',
    borderWidth: 2,
  },
  debugOverlayFrameVis: {
    left: 0,
    borderColor: 'red',
    borderWidth: 2,
  },
});
module.exports = z;
