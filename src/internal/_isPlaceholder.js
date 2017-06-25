exports._isPlaceholder = function (a) {
  return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true
}
