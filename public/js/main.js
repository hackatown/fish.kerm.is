//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////      Socket Stuff      ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var currentURL = window.location.href;
var loc = window.location;
if(loc.port != undefined && loc.port > 1){
    var currentURL = loc.protocol + '//' + loc.hostname + ':' + loc.port;
}else{
    var currentURL = loc.protocol + '//' + loc.hostname;
}
console.log(window.location);
console.log(currentURL)

var socket = io.connect(currentURL);

var room= null;


//    // let's assume that the client page, once rendered, knows what room it wants to join
// var room = array('percusie', 'kick', 'melody', 'bass');
var canvas, stage, exportRoot;



$(function(){
    $('.urlFounded').html(currentURL);
    $('.roomGenerated').html(room);
    $('.instruct').fadeIn('fast')
});


    socket.on('shakesss', function() {

            canvas = document.getElementById("canvas");
        exportRoot = new lib.circle();

        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();

        createjs.Ticker.setFPS(41);
        createjs.Ticker.addListener(stage);
        });


socket.on('connect', function() {
   // Connected, let's sign-up for to receive messages for this room
   socket.emit('room', room);
   socket.emit('message', {msg: 'client joined room with ID '+ room});
   console.log('joined room');
});

socket.on('message', function(data) {
   console.log('Incoming message:', data);
});

socket.on('length', function(data) {
   console.log('Incoming length clients:', data);


   switch(data.room)
   {
    case 'percussie' :
        // context.beginPath();
        // context.arc(pos['x'], pos['y'], radius, 0, 2 * Math.PI, false);
        // context.fillStyle = getRandomColor();
        // context.fill();



        break;
    case 'bass' :
        break;
    case 'kick' :
        break;
    case 'melodie' :
        break;
   }

});

// socket.on('motionDataOut', function(data) {
//    // console.log('Incoming motionData:', data);
//    // Tilt Left/Right [gamma]
//    // Tilt Front/Back [beta]
//    // Direction [alpha]

//    $('.debug').html('gamma: ' + data.gamma + ' <br>beta:' + data.beta + ' <br> alpha: ' + data.alpha);
//    phoneObj.rotY = deg2rad(data.alpha);
//    phoneObj.rotX = deg2rad(data.beta);
//    phoneObj.rotZ = deg2rad(data.gamma);

//    updateRod();
// });

function deg2rad(angle) {

  return angle * .017453292519943295; // (angle / 180) * Math.PI;
}

function rad2deg(angle) {

  return angle * 57.29577951308232; // angle / Math.PI * 180
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function getRandomPos() {
    var x = 1 + Math.floor(Math.random() * 100);
    var y = 1 + Math.floor(Math.random() * 100);

    var numbers = new Array();
    numbers['x'] = x;
    numbers['y'] = y;

    return numbers;
}

function getRandomSize() {
    var radius = 10 + Math.floor(Math.random() * 50);

    return radius;
}


// var client = io.connect('http://localhost/osc/clients/5555');

// setInterval(function() {
//     console.log('interval', client);
//   client.emit('/Test', [Math.random()]);
// }, 500);
