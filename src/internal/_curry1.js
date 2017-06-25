const _isPlaceholder = require('./_isPlaceholder')

exports._curry1 = function (fn) {
  return function f1 (a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1
    } else {
      return fn.apply(this, arguments)
    }
  }
}
