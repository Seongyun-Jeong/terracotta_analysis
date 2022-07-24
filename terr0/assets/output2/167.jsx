import React from 'react';

var module11 = require('./11'),
  module168 = require('./168'),
  o = React.forwardRef(function (o, s) {
    return <module168 />;
  });

o.defaultProps = {
  styleAttr: 'Normal',
  indeterminate: true,
  animating: true,
};
module.exports = o;
