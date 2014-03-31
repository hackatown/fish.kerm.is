// Import the Express module
var express = require('express');

// Import the 'path' module (packaged with Node.js)
var path = require('path');

//var osc = require('osc.io');
var osc = require('node-osc');

// Create a new instance of Express
var app = express();

// Import the Anagrammatix game file.
var game = require('./game');

var clients = null;

// Create a simple Express application
app.configure(function() {
    // Turn down the logging activity
    app.use(express.logger('dev'));

    // Serve static html, js, css, and image files from the 'public' directory
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function(req, res) {
    res.send('app is running')
})

var port = process.env.PORT || 3000;

// Create a Node.js based http server on port 8080
var server = require('http').createServer(app).listen(port);

// Create a Socket.IO server and attach it to the http server
var io = require('socket.io').listen(server);

// Reduce the logging output of Socket.IO
io.set('log level', 1);

// osc(io);



// attach Socket.io to our HTTP server
// io = socketio.listen(server);
//
var room;
var roomio;

// handle incoming connections from clients
io.sockets.on('connection', function(socket)
{



     // once a client has connected, we expect to get a ping from them saying what room they want to join
     socket.on('newRoom', function(data) {
        room = data.room
    });
    socket.on('room', function(room) {
    	room = room;
    	roomio = room;
        socket.join(roomio);
        console.log('room room room :', roomio)
        clients = io.sockets.clients(roomio).length;

        roomInfo= {
            room: roomio,
            length: clients
        }

        console.log('roominfo', roomInfo);

        io.sockets.emit('length', roomInfo);

    });

    socket.on('message', function(data){
    	console.log('currentroom: ', roomio);
		console.log(data);
		io.sockets.in(roomio).emit('message', data);
	});

    socket.on('tapstart', function(data){
        console.log('tapped: ');
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
        client.send('/Tap', 0.8);

        io.sockets.emit('tap_anim', {});

    });

    socket.on('debug', function(data){
        console.log('debug', data );
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
       // client.send('/Tap', 0.8);
    });


    socket.on('bass', function(data)
    {

        // data van -40 tot 70
        var percentage = (data + 40) / 110;
        percentage = Math.max( 0, Math.min(1, percentage));

     //   console.log('bass', percentage );

        client.send('/Rotate', percentage);

        io.sockets.emit('rotate_anim', percentage);
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
       // client.send('/Tap', 0.8);
    });


     socket.on('tapstop', function(data){
        console.log('tapping stopped ');
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
        client.send('/Tap', 0);
    });

        socket.on('swipestart', function(data){
        console.log('swiped: ');
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
        client.send('/Swipe', 0.8);

        io.sockets.emit('swipe_anim', {});

    });
     socket.on('swipestop', function(data){
        console.log('swiping stopped ');
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
        client.send('/Swipe', 0);
    });


    var current_shaking = 0;

    socket.on('shake', function(data)
    {

           // io.sockets.emit('shake_it', {});
           socket.emit('shake_it_now', {});

           io.sockets.emit('shake_anim', {});

        current_shaking = 0.8;
        shakeIt( current_shaking );
        // current_shaking_easing = current_shaking;
        // current_shaking = Math.max( 0.3, Math.min(current_shaking, 0.8) );


        // shakeIt( current_shaking );


        client.send('/layer4/clip1/connect', 1);



        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);
    });

    socket.on('stopshake', function(data){

        current_shaking = 0;
        shakeIt( current_shaking );
        // shakeIt( current_shaking );
        // console.log(data);
        // io.sockets.in(roomio).emit('message', data);

         client.send('/layer4/video/opacity/values', 0);

    });





    var client = new osc.Client('192.168.17.144', 5555);
    function shakeIt( shaking )
    {

        console.log( 'shaking', shaking );
        client.send('/Shake', shaking);

    }

	socket.on('test', function(data){
		console.log(data);
		io.sockets.in(roomio).emit('test', data);
	})

            socket.on('interaction', function(data){
                io.sockets.in(roomio).emit('interaction', data)
            })

	socket.on('motionData',function(data){
		// console.log(data);
		io.sockets.in(roomio).emit('motionDataOut', data);
		// io.sockets.emit('motionDataOut', data);
	})
});

// now, it's easy to send a message to just the clients in a given room
// io.sockets.in(room).emit('message', 'what is going on, party people?');

// this message will NOT go to the client defined above
io.sockets.in('foobar').emit('message', 'anyone in this room yet?');


