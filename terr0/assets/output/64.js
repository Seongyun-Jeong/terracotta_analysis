var module58 = require('./58'),
  PropTypes = require('prop-types'),
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
