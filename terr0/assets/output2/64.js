import PropTypes from 'prop-types';

var module58 = require('./58'),
  o = {
    shadowColor: module58,
    shadowOffset: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
  };

module.exports = o;
