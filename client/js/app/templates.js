Template.main.data = function() {
	return Channels.find();
};

Template.main.events = function() {
	return Events.find();
}

Template.main.event = function(json) {
	return JSON.stringify(json, undefined, 2);
}