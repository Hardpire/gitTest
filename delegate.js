; (function () {
	
	eventCrossFunction.addEvent(document, 'click', changeColor);
	eventCrossFunction.addEvent(document, 'mouseover', changeColor);
	// function testFunc(){
	// 	alert('ye');
	// };
	
	function changeColor(event){
		var element = eventCrossFunction.getTarget(event) 
		var colorData = element.getAttribute("data-color");
		
		
		if(colorData){
			if(event.type == 'click'){
				document.body.className = colorData;
			}
			if(event.type == 'mouseover'){
				document.body.className = "";
			}
			
		}
	};
	
	
	
	
})();