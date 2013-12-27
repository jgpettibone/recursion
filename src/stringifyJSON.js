// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

    var strCleanUp = function(str) {
      var lastInd = str.length-1;
      if (str.charAt(lastInd) === ',') {
	str = str.slice(0,lastInd);
      }
      return str;
    };
    
    var typeArr = Object.prototype.toString.call(obj);
    var type = typeArr.slice(8,typeArr.length-1);
    
    if ((type === 'Number') || (type === 'Boolean')) {
	return obj.toString();
    } else if (type === 'Null') {
	return "null";
    } else if (type === 'String') {
	return '"' + obj + '"';
    } else if ((type === 'Function') || (type === 'Undefined')) { 
	return '';
    } else if (type === 'Array') {
	var len = obj.length;
	if (len === 0) {
	    return '[]';
	} 
	var elements = '[';
	for (var i=0; i<len; i++) {
	    /*
	    var el = stringifyJSON(obj[i]);
	    if (el != '') {
		elements += el + ",";
	    }
	    */
	    elements += stringifyJSON(obj[i]) + ",";
	}
	elements = strCleanUp(elements) + ']';
	//elements += ']';
	return elements;

    } else if (type === 'Object') {
	var len = Object.keys(obj).length;
	if (len === 0) { 
	    return '{}';
	}
	var elements = '{';
	for (var key in obj) {
	    var keyel = stringifyJSON(key);
	    var valel = stringifyJSON(obj[key]);
	    if ((keyel != '') && (valel != '')) {
		elements += keyel + ':' + valel + ',';
	    }
	    //elements += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
	}
	elements = strCleanUp(elements) + '}';
	//elements += '}';
	return elements;
    } 
    return '';

};
