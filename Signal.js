if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
	function Signal(name) {
		var connectedSlots = [];
		
		var signalFunction = function emit(data) {
			connectedSlots.forEach(function callConnectedFunction(slot) {
				slot(data);
			});
		};
		signalFunction.signalName = name;
		signalFunction.connect = function connect(slot) {
			connectedSlots.push(slot);
		};
		
		return signalFunction;
	}
	
	return Signal;
});
