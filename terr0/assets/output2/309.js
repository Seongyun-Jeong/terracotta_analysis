var module22 = require('./22'),
  module280 = require('./280');

class s {
  constructor(n) {
    var h = this;
    module22(this, s);
    this._dataSource = new module280({
      getRowData: n.getRowData,
      getSectionHeaderData: n.getSectionHeaderData,
      rowHasChanged: function (t, o) {
        return (t.id !== h._previousOpenRowID && o.id === h._openRowID) || (t.id === h._previousOpenRowID && o.id !== h._openRowID) || n.rowHasChanged(t, o);
      },
      sectionHeaderHasChanged: n.sectionHeaderHasChanged,
    });
  }

  cloneWithRowsAndSections(t, n, o) {
    this._dataSource = this._dataSource.cloneWithRowsAndSections(t, n, o);
    this._dataBlob = t;
    this.rowIdentities = this._dataSource.rowIdentities;
    this.sectionIdentities = this._dataSource.sectionIdentities;
    return this;
  }

  getDataSource() {
    return this._dataSource;
  }

  getOpenRowID() {
    return this._openRowID;
  }

  getFirstRowID() {
    return this.rowIdentities ? this.rowIdentities[0] && this.rowIdentities[0][0] : Object.keys(this._dataBlob)[0];
  }

  getLastRowID() {
    if (this.rowIdentities && this.rowIdentities.length) {
      var t = this.rowIdentities[this.rowIdentities.length - 1];
      if (t && t.length) return t[t.length - 1];
    }

    return Object.keys(this._dataBlob)[this._dataBlob.length - 1];
  }

  setOpenRowID(t) {
    this._previousOpenRowID = this._openRowID;
    this._openRowID = t;
    this._dataSource = this._dataSource.cloneWithRowsAndSections(this._dataBlob, this.sectionIdentities, this.rowIdentities);
    return this;
  }
}

module.exports = s;
