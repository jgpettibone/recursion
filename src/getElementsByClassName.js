// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

    var arr = []; 

    if ( typeof arguments[1] === 'undefined' ) { 
        var elements = document.body; 
    } else {
	var elements = arguments[1];
    }

    var re = new RegExp("(?:^|\\s)" + className + "(?:\\s|$)");
    if (re.test(elements.className)) {
	console.log(elements.className + " = " + className);
        arr.push(elements); 
    }

    var children = elements.childNodes;  

    if ( typeof children != 'undefined') {
	var childLen = children.length;
	if ( childLen != 0 )  {
	    for (var i=0; i<childLen; i++) {
 	        var newArr = getElementsByClassName(className, children[i]);
	        if (typeof newArr != 'undefined') {
 	            arr = arr.concat(newArr);
	        }
            }
        } 
    }
    return arr;

};
