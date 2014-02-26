App = Ember.Application.create({
	LOG_TRANSITIONS: true,
	// ember settings
	
	defaultTitle: 'IRCAnywhere',
	timeout: null,
	timein: null,
	isActive: false,
	// global variables
	
	Parser: Ember.Parser.create(),
	Socket: Ember.Socket.extend({
		controllers: ['index', 'disconnected', 'addnetwork', 'input', 'messages', 'network', 'settings', 'sidebar', 'titlebar', 'userlist']
	})
	// application objects
});