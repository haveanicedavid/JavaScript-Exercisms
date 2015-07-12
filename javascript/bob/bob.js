var Bob = function() {};

Bob.prototype.hey = function(input) {
	if ( input === input.toUpperCase() ) {
		return 'Whoa, chill out!';
	} else if(input.slice(-1) === "?"){
		return 'Sure.';
	} else {
		return 'Whatever.';
	}
};

module.exports = Bob;
