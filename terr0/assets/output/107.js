var n;
if (require('./108').canUseDOM) n = window.performance || window.msPerformance || window.webkitPerformance;
module.exports = n || {};
