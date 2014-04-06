// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var result = '[';
    result += _.map(obj, function(item) {
      return stringifyJSON(item);
    }).join(',');
    result += ']';
    return result;
  }
  if (obj && typeof obj === 'object') {
    var result = '{';
    var arr =[];
    _.each(obj, function(value, key) {
      if (typeof value != 'function' && typeof value != 'undefined') {
        arr.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      }
    });
    result += arr.join(',') + '}';
    return result;
  }
  return "" + obj;
 };
