const Type = require('../../src/internal/_type')
const expect = require('chai').expect

describe('Type.isObject', () => {
  it('should be Object', () => {
    expect(Type.isObject({})).to.be.true
  })
})

describe('Type.isBoolean', function () {
  it('should return a true if a Boolean', function () {
    expect(Type.isBoolean(true)).to.be.true
  })
})

describe('Type.isArray', function () {
  it('should return a true if an Array', function () {
    expect(Type.isArray([])).to.be.true
  })
})

describe('Type.isString', function () {
  it('should return a true if a String', function () {
    expect(Type.isString('hello world')).to.be.true
  })
})

describe('Type.isRegExp', function () {
  it('should return a true if a RegExp', function () {
    expect(Type.isRegExp(/test/i)).to.be.true
  })
})

describe('Type.isFunction', function () {
  it('should return a true if a function', function () {
    expect(Type.isFunction(() => {})).to.be.true
  })
})

describe('Type.isNumber', function () {
  it('should return true if a number', function () {
    expect(Type.isNumber(1)).to.be.true
  })
})

describe('Type.isSymbol', function () {
  it('should return true if a symbol', function () {
    expect(Type.isSymbol(Symbol())).to.be.true
  })
})
