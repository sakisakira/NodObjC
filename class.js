var core = require('./core')
  , id = require('./id')
  , classCache = {}

var proto = exports.proto = Object.create(id.proto);

exports.getClass = function (c) {
  var pointer = core.objc_getClass(c);
  return classCache[c] = exports.wrap(pointer);
}

exports.wrap = function wrap (pointer) {
  var w = id.wrap(pointer);
  w.__proto__ = proto;
  return pointer;
}
