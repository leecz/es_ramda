
const Type = {}
const types = 'Array Object String Symbol Date RegExp Function Boolean Number Null Undefined'.split(' ')

const toType = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}

for (let type of types) {
  Type['is' + type] = function (obj) {
    return toType(obj) === type
  }
}

module.exports = Type

