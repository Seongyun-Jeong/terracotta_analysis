import React from 'react';

var module52 = require('./52'),
  module180 = require('./180'),
  module75 = require('./75');

var f = module52.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.25)',
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 2,
  },
  text: {
    fontSize: 6,
    color: '#ffffff',
  },
});

module.exports = function () {
  return (
    <module75 style={f.container}>
      <module180 style={f.text}>FABRIC</module180>
    </module75>
  );
};
