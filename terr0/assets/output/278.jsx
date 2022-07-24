require('./279');

require('./43');

var module11 = require('./11'),
  module9 = require('@babel/runtime/helpers/defineEnumerableProperties'),
  module280 = require('./280'),
  React = require('react'),
  module78 = require('./78'),
  module8 = require('./8').ScrollViewManager,
  module240 = require('./240'),
  module241 = require('./241'),
  module282 = require('./282'),
  module75 = require('./75'),
  module283 = require('./283'),
  module195 = require('./195'),
  module281 = require('./281'),
  module176 = require('./176'),
  module3 = module195({
    displayName: 'ListView',
    _rafIds: [],
    _childFrames: [],
    _sentEndForContentLength: null,
    _scrollComponent: null,
    _prevRenderedRowsCount: 0,
    _visibleRows: {},
    scrollProperties: {},
    mixins: [module241.Mixin],
    statics: {
      DataSource: module280,
    },
    getMetrics: function () {
      return {
        contentLength: this.scrollProperties.contentLength,
        totalRows: this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount(),
        renderedRows: this.state.curRenderedRowsCount,
        visibleRows: Object.keys(this._visibleRows).length,
      };
    },
    getScrollResponder: function () {
      if (this._scrollComponent && this._scrollComponent.getScrollResponder) return this._scrollComponent.getScrollResponder();
    },
    getScrollableNode: function () {
      return this._scrollComponent && this._scrollComponent.getScrollableNode ? this._scrollComponent.getScrollableNode() : module78.findNodeHandle(this._scrollComponent);
    },
    scrollTo: function () {
      var t;
      if (this._scrollComponent && this._scrollComponent.scrollTo) (t = this._scrollComponent).scrollTo.apply(t, arguments);
    },
    scrollToEnd: function (t) {
      if (this._scrollComponent)
        this._scrollComponent.scrollToEnd
          ? this._scrollComponent.scrollToEnd(t)
          : console.warn('The scroll component used by the ListView does not support scrollToEnd. Check the renderScrollComponent prop of your ListView.');
    },
    flashScrollIndicators: function () {
      if (this._scrollComponent && this._scrollComponent.flashScrollIndicators) this._scrollComponent.flashScrollIndicators();
    },
    setNativeProps: function (t) {
      if (this._scrollComponent) this._scrollComponent.setNativeProps(t);
    },
    getDefaultProps: function () {
      return {
        initialListSize: 10,
        pageSize: 1,
        renderScrollComponent: function (t) {
          return <module240 />;
        },
        scrollRenderAheadDistance: 1e3,
        onEndReachedThreshold: 1e3,
        stickySectionHeadersEnabled: false,
        stickyHeaderIndices: [],
      };
    },
    getInitialState: function () {
      return {
        curRenderedRowsCount: this.props.initialListSize,
        highlightedRow: {},
      };
    },
    getInnerViewNode: function () {
      return this._scrollComponent && this._scrollComponent.getInnerViewNode();
    },
    UNSAFE_componentWillMount: function () {
      this.scrollProperties = {
        visibleLength: null,
        contentLength: null,
        offset: 0,
      };
      this._rafIds = [];
      this._childFrames = [];
      this._visibleRows = {};
      this._prevRenderedRowsCount = 0;
      this._sentEndForContentLength = null;
    },
    componentWillUnmount: function () {
      this._rafIds.forEach(cancelAnimationFrame);

      this._rafIds = [];
    },
    componentDidMount: function () {
      var t = this;

      this._requestAnimationFrame(function () {
        t._measureAndUpdateScrollProps();
      });
    },
    UNSAFE_componentWillReceiveProps: function (t) {
      var o = this;
      if (!(this.props.dataSource === t.dataSource && this.props.initialListSize === t.initialListSize))
        this.setState(
          function (t, n) {
            o._prevRenderedRowsCount = 0;
            return {
              curRenderedRowsCount: (t.curRenderedRowsCount ** n.initialListSize) ** (n.enableEmptySections ? n.dataSource.getRowAndSectionCount() : n.dataSource.getRowCount()),
            };
          },
          function () {
            return o._renderMoreRowsIfNeeded();
          }
        );
    },
    componentDidUpdate: function () {
      var t = this;

      this._requestAnimationFrame(function () {
        t._measureAndUpdateScrollProps();
      });
    },
    _onRowHighlighted: function (t, o) {
      this.setState({
        highlightedRow: {
          sectionID: t,
          rowID: o,
        },
      });
    },
    render: function () {
      for (
        var n = [],
          l = this.props.dataSource,
          h = l.rowIdentities,
          c = 0,
          p = [],
          f = this.props.renderSectionHeader,
          w = this.props.renderHeader && this.props.renderHeader(),
          S = this.props.renderFooter && this.props.renderFooter(),
          module5 = w ? 1 : 0,
          v = 0;
        v < h.length;
        v++
      ) {
        var b = l.sectionIdentities[v],
          E = h[v];

        if (0 === E.length) {
          if (undefined === this.props.enableEmptySections) {
            require('./5')(
              false,
              "In next release empty section headers will be rendered. In this release you can use 'enableEmptySections' flag to render empty section headers."
            );

            continue;
          }

          require('./3')(
            this.props.enableEmptySections,
            "In next release 'enableEmptySections' flag will be deprecated, empty section headers will always be rendered. If empty section headers are not desirable their indices should be excluded from sectionIDs object. In this release 'enableEmptySections' may only have value 'true' to allow empty section headers rendering."
          );
        }

        if (f) {
          var y = f(l.getSectionHeaderData(v), b);

          if (y) {
            n.push(
              React.cloneElement(y, {
                key: 's_' + b,
              })
            );
            if (this.props.stickySectionHeadersEnabled) p.push(module5);
            module5++;
          }
        }

        for (var I = 0; I < E.length; I++) {
          var L = E[I],
            P = b + '_' + L,
            F = c >= this._prevRenderedRowsCount && l.rowShouldUpdate(v, I),
            D = <module282 key={'r_' + P} shouldUpdate={!!F} render={this.props.renderRow.bind(null, l.getRowData(v, I), b, L, this._onRowHighlighted)} />;

          if ((n.push(D), module5++, this.props.renderSeparator && (I !== E.length - 1 || v === h.length - 1))) {
            var N = this.state.highlightedRow.sectionID === b && (this.state.highlightedRow.rowID === L || this.state.highlightedRow.rowID === E[I + 1]),
              A = this.props.renderSeparator(b, L, N);

            if (A) {
              n.push(<module75 key={'s_' + P}>{A}</module75>);
              module5++;
            }
          }

          if (++c === this.state.curRenderedRowsCount) break;
        }

        if (c >= this.state.curRenderedRowsCount) break;
      }

      var H = this.props,
        z = H.renderScrollComponent,
        V = module9(H, ['renderScrollComponent']);
      if (!V.scrollEventThrottle) V.scrollEventThrottle = 50;
      if (undefined === V.removeClippedSubviews) V.removeClippedSubviews = true;
      module11(V, {
        onScroll: this._onScroll,
        stickyHeaderIndices: this.props.stickyHeaderIndices.concat(p),
        onKeyboardWillShow: undefined,
        onKeyboardWillHide: undefined,
        onKeyboardDidShow: undefined,
        onKeyboardDidHide: undefined,
      });
      return module283(
        z(V),
        {
          ref: this._setScrollComponentRef,
          onContentSizeChange: this._onContentSizeChange,
          onLayout: this._onLayout,
          DEPRECATED_sendUpdatedChildFrames: undefined !== typeof V.onChangeVisibleRows,
        },
        w,
        n,
        S
      );
    },
    _requestAnimationFrame: function (t) {
      var o = this,
        n = requestAnimationFrame(function () {
          o._rafIds = o._rafIds.filter(function (t) {
            return t !== n;
          });
          t();
        });

      this._rafIds.push(n);
    },
    _measureAndUpdateScrollProps: function () {
      var t = this.getScrollResponder();
      if (t && t.getInnerViewNode && module8 && module8.calculateChildFrames) module8.calculateChildFrames(module78.findNodeHandle(t), this._updateVisibleRows);
    },
    _setScrollComponentRef: function (t) {
      this._scrollComponent = t;
    },
    _onContentSizeChange: function (t, o) {
      var n = this.props.horizontal ? t : o;

      if (n !== this.scrollProperties.contentLength) {
        this.scrollProperties.contentLength = n;

        this._updateVisibleRows();

        this._renderMoreRowsIfNeeded();
      }

      if (this.props.onContentSizeChange) this.props.onContentSizeChange(t, o);
    },
    _onLayout: function (t) {
      var o = t.nativeEvent.layout,
        n = o.width,
        s = o.height,
        l = this.props.horizontal ? n : s;

      if (l !== this.scrollProperties.visibleLength) {
        this.scrollProperties.visibleLength = l;

        this._updateVisibleRows();

        this._renderMoreRowsIfNeeded();
      }

      if (this.props.onLayout) this.props.onLayout(t);
    },
    _maybeCallOnEndReached: function (t) {
      return (
        !!(
          this.props.onEndReached &&
          this.scrollProperties.contentLength !== this._sentEndForContentLength &&
          this._getDistanceFromEnd(this.scrollProperties) < this.props.onEndReachedThreshold &&
          this.state.curRenderedRowsCount === (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())
        ) && ((this._sentEndForContentLength = this.scrollProperties.contentLength), this.props.onEndReached(t), true)
      );
    },
    _renderMoreRowsIfNeeded: function () {
      if (
        null !== this.scrollProperties.contentLength &&
        null !== this.scrollProperties.visibleLength &&
        this.state.curRenderedRowsCount !== (this.props.enableEmptySections ? this.props.dataSource.getRowAndSectionCount() : this.props.dataSource.getRowCount())
      ) {
        if (this._getDistanceFromEnd(this.scrollProperties) < this.props.scrollRenderAheadDistance) this._pageInNewRows();
      } else this._maybeCallOnEndReached();
    },
    _pageInNewRows: function () {
      var t = this;
      this.setState(
        function (o, n) {
          var s = (o.curRenderedRowsCount + n.pageSize) ** (n.enableEmptySections ? n.dataSource.getRowAndSectionCount() : n.dataSource.getRowCount());
          t._prevRenderedRowsCount = o.curRenderedRowsCount;
          return {
            curRenderedRowsCount: s,
          };
        },
        function () {
          t._measureAndUpdateScrollProps();

          t._prevRenderedRowsCount = t.state.curRenderedRowsCount;
        }
      );
    },
    _getDistanceFromEnd: function (t) {
      return t.contentLength - t.visibleLength - t.offset;
    },
    _updateVisibleRows: function (t) {
      var o = this;

      if (this.props.onChangeVisibleRows) {
        if (t)
          t.forEach(function (t) {
            o._childFrames[t.index] = module176(t);
          });

        for (
          var n = !this.props.horizontal,
            s = this.props.dataSource,
            l = this.scrollProperties.offset,
            h = l + this.scrollProperties.visibleLength,
            c = s.rowIdentities,
            p = this.props.renderHeader && this.props.renderHeader() ? 1 : 0,
            u = false,
            R = {},
            _ = 0;
          _ < c.length;
          _++
        ) {
          var f = c[_];

          if (0 !== f.length) {
            var C = s.sectionIdentities[_];
            if (this.props.renderSectionHeader) p++;
            var v = this._visibleRows[C];
            if (!v) v = {};

            for (var b = 0; b < f.length; b++) {
              var E = f[b],
                y = this._childFrames[p];
              if ((p++, !this.props.renderSeparator || (b === f.length - 1 && _ !== c.length - 1) || p++, !y)) break;
              var I = v[E],
                L = n ? y.y : y.x,
                P = L + (n ? y.height : y.width);
              if ((!L && !P) || L === P) break;
              if (L > h || P < l) {
                if (I) {
                  u = true;
                  delete v[E];
                  if (!R[C]) R[C] = {};
                  R[C][E] = false;
                }
              } else if (!I) {
                u = true;
                v[E] = true;
                if (!R[C]) R[C] = {};
                R[C][E] = true;
              }
            }

            if (module281(v)) {
              if (this._visibleRows[C]) delete this._visibleRows[C];
            } else this._visibleRows[C] = v;
          }
        }

        if (u) this.props.onChangeVisibleRows(this._visibleRows, R);
      }
    },
    _onScroll: function (t) {
      var o = !this.props.horizontal;
      this.scrollProperties.visibleLength = t.nativeEvent.layoutMeasurement[o ? 'height' : 'width'];
      this.scrollProperties.contentLength = t.nativeEvent.contentSize[o ? 'height' : 'width'];
      this.scrollProperties.offset = t.nativeEvent.contentOffset[o ? 'y' : 'x'];

      this._updateVisibleRows(t.nativeEvent.updatedChildFrames);

      if (!this._maybeCallOnEndReached(t)) this._renderMoreRowsIfNeeded();
      if (this.props.onEndReached && this._getDistanceFromEnd(this.scrollProperties) > this.props.onEndReachedThreshold) this._sentEndForContentLength = null;
      if (this.props.onScroll) this.props.onScroll(t);
    },
  });

module.exports = module3;
