// remote login services for message logins 
//console.log(__filename); // wrapper function
//console.log(__dirname); // wrapper function

const EventEmitter = require('events');

var url = 'http://mylogger.io/log'; // we will send HTTP request to this URL

class Logger extends EventEmitter {
	log(message){
		// Send an HTTP request
		console.log(message);

		// Raise an event
		this.emit('messageLogged', { id: 1, url: 'http://'}); // every time we log a message, raise this event 'messageLogged'

	}
}

module.exports = Logger; // adding a method log to the exports object so that is accessed by the outside files, and setting it to the log function function

//module.exports.endPoint = url; //since URL does not need to be public as it is just implementation detail


