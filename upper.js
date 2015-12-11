var func = function(a, b){//this = window;
	return a+b;
};


var myObj = {// this = myObj
	func:function(a, b){//this = obj; public
	return a+b;}
}

var myObj = (function(){
	var funcPriv = function(){
		console.log("private" + "this =" + this + this.a);
	}
	
	
	return {
		func:function(a, b){//this = obj; public
		return a+b;},
		funcPublic: funcPriv
	}	
	
}
)();
	
