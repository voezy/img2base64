const processUrl = require('./utils');

;(function (name, definition) {
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    define(definition);
  } else if (hasExports) {
    module.exports = definition();
  } else {
    window[name] = definition();
  }
})('Img2base64', function() {
  return function(url, conf) {
    return processUrl(url);
  };
});