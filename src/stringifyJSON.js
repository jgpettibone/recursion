// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
    
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
	} else {
	    var elements = '[';
	    for (var i=0; i<len; i++) {
		elements += stringifyJSON(obj[i]) + ",";
	    }
	    if (elements.charAt(elements.length-1) === ',') {
		var els = elements.slice(0, elements.length-1);
	    }
	    els += ']';
	    return els;
	}
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
	if (elements.charAt(elements.length-1) === ',') {
	    var elements = elements.slice(0, elements.length-1);
	}
	elements += '}';
	return elements;
    } 
    return '';

};
