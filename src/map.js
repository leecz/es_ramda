const _curry2 = require('./internal/_curry2')
const _dispatchable = require('./internal/_dispatchable')
const _xmap = require('./internal/_xmap')

exports.map = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map (fn, functor) {

}))
