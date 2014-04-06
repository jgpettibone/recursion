// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var root = root || document.body;
  var result = [];

  var getElem = function (root) {
    if ($(root).hasClass(className)) {
      result.push(root);
    }
    for (var i = 0; i<root.childNodes.length; i++) {
      getElem(root.childNodes[i]);
    }
  }

  getElem(root);
  return result;
};
