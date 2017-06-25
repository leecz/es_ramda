exports._map = function (fn, functor) {
  // const result = []
  // for (let i = 0, len = functor.length; i < len; i++) {
  //   result[i] = fn(functor[i])
  // }
  // return result
  return functor.map(fn)
}
