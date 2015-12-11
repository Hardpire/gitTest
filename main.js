
	var eventCrossFunction = {
		addEvent: function (element, type, func) {
			
			if (typeof addEventListener !== 'undefined') {//Not IE
				element.addEventListener(type, func, false);
			} else if (typeof attachEvent !== 'undefined') {//IE old
				element.attachEvent('on' + type, func);
			} else {
				el['on' + type] = func;//Axe evetn))
			}
		},


		removeEvent: function (el, type, func) {
			if (typeof removeEventListener !== 'undefined') {
				element.removeEventListener(type, func, false);
			} else if (typeof detachEvent !== 'undefined') {
				element.detachEvent('on' + type, func);
			} else {
				el['on' + type] = null;
			}
		},


		getTarget: function (event) {
			if (typeof event.target !== 'undefined') {
				return event.target;
			} else {
				return event.srcElement;
			}
		},

		preventDefault: function (event) {
			if (typeof event.preventDefault !== 'undefined') {
				event.preventDefault();
			} else {
				event.returnValue = false;
			}
		}
	};



















// ; (function () {
// 	var el = document.getElementById('box');
// 	var htm = document.getElementsByTagName('header')[0];
	
	
// 	htm.addEventListener('click', lol, false);

// 	el.addEventListener('click', my, true);


// 	function lol(event) {
// 		console.log(event);
// 		console.log(event.type);
// 		console.log(event.currentTarget);
// 		console.log(event.Target);
		
		
// 		alert("hi");
// 	};
// 	function my(event) {

// 		alert(event);
// 		if (this.style.backgroundColor == "red") {
// 			this.style.backgroundColor = "blue"
// 		} else this.style.backgroundColor = "red";

// 	};

// })();
