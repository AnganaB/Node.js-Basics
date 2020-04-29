/*function sayHello(name){
	console.log('Hello ' + name);
}

sayHello('Angana');

//console.log(window) (undefined in node)


//console.log(); //global 

var message = '';
//console.log(global.message); // undefined
//console.log(window.message); // only works with broswer



//console.log(module);



const path = require('path')
var pathObj = path.parse(__filename);

//console.log(pathObj);  

const os = require('os');
var TotMem = os.totalmem();
var FreeMem = os.freemem()

//console.log(`Total Memory: ${TotMem}`);
//console.log(`Free Memory: ${FreeMem}`);

const fs = require('fs');
var filesSync = fs.readdirSync('./');

//console.log(filesSync);

fs.readdir('./', function(err, files){
	if (err)
			console.log('Error', err);
	else
			console.log('Results', files);
});

*/
const EventEmitter = require('events'); // class EventEmitter
/* const emitter = new EventEmitter(); // emitter is an object, which is an instance of the class



emitter.on('logging', (arg) => {
	console.log('Logging message:', arg);
});

emitter.emit('logging', {message: 'Hi! Welcome to my World!'});
*/
const Logger = require('./logger.js');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', (arg) => { // arg : Event argument
	console.log('Listener called', arg);
});



logger.log('message');

const http = require('http');
const server = http.createServer(); // create a web server
									// this server is an event emitter
server.on('connection', (socket) => {
	console.log('New Connection...');
});

							

const serv = http.createServer((req, res) => {
	if (req.url === '/'){
		res.write('Hello World!');
		res.end();
	}
	if (req.url == 'api/courses')
	{
		res.write(JSON.stringify([1, 2, 3]));
	}		

});

serv.listen(3000);

console.log('Listening on port 3000...');		

 