
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var port = 3700;
var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3700);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);

var io = require('socket.io').listen(app.listen(port));//app.listen(port);
console.log("Listening on port " + port);

/***** Connection Handler That Every Socket.io App should Begin With *****/
io.sockets.on('connection', function (socket) 
{
    /*socket.emit('message', { message: 'welcome to the chat' });
    
    socket.on('send', function (data)
    {
        io.sockets.emit('message', data);
    });*/
	socket.on('allight', function (data)
	{
		io.sockets.emit('allightGirl', data);
	});

    socket.on('shut', function (data)
    {
    	io.sockets.emit('shutGirl', data);
    });

    socket.on('light', function (data)
    {
    	io.sockets.emit('lightGirl', data);
    });

    socket.on('blow', function (data)
    {
    	io.sockets.emit('blowGirl', data);
    });
    socket.on('quit', function (data)
    {
    	io.sockets.emit('quitGirl', data);
    });
});
