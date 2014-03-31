//Bart Van Itterbeeck

(function (window, document) {

    function Shake() {

        //Kijkt of het toestel
        this.hasDeviceMotion = 'ondevicemotion' in window;

        //Zet de waarde die het toestel moet uitwijken om als shake te worden geregistreerd
        this.threshold = 10;

        //zet de waarden van de accelerometer op 0 bij laden van de pagina
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;

        //Maakt een nieuw shake event aan
        this.event = document.createEvent('Event');
        this.event.initEvent('shake', true, true);
    }

    //The prototype constructor allows you to add new properties and methods to the Shake() object
    //reset timer values
    Shake.prototype.reset = function () {  //Adds a reset function to the Shake-object

        this.lastTime = new Date();         //Zet de waarden van de accelerometer terug op nul
        this.lastX = null;
        this.lastY = null;
        this.lastZ = null;
    };

    //start listening for devicemotion
    Shake.prototype.start = function () {  //Adds a Start function to the Shake-object

        this.reset();
        if (this.hasDeviceMotion) { window.addEventListener('devicemotion', this, false); }
    };

    //stop listening for devicemotion
    Shake.prototype.stop = function () {  //Adds a Stop function to the Shake-object

        if (this.hasDeviceMotion) { window.removeEventListener('devicemotion', this, false); }
        this.reset();
    };

    //calculates if shake did occur
    Shake.prototype.devicemotion = function (e) { //Adds a devicemotion function to the Shake-object

        var current = e.accelerationIncludingGravity,
            currentTime,
            timeDifference,
            deltaX = 0,
            deltaY = 0,
            deltaZ = 0;

        if ((this.lastX === null) && (this.lastY === null) && (this.lastZ === null)) {

            this.lastX = current.x;
            this.lastY = current.y;
            this.lastZ = current.z;
            return;
        }

        deltaX = Math.abs(this.lastX - current.x); //Maakt er gehele waarden van
        deltaY = Math.abs(this.lastY - current.y);
        deltaZ = Math.abs(this.lastZ - current.z);

        if (((deltaX > this.threshold) && (deltaY > this.threshold)) || ((deltaX > this.threshold) && (deltaZ > this.threshold)) || ((deltaY > this.threshold) && (deltaZ > this.threshold))) { //Kijkt of het toestel wel genoeg uitwijkt

            //Berekent de tijd in miliseconden sinds er de laatste keer is geschud
            currentTime = new Date();
            timeDifference = currentTime.getTime() - this.lastTime.getTime();

            if (timeDifference > 100) {
                window.dispatchEvent(this.event);
                this.lastTime = new Date();
            }
        }
    };

    //event handler
    Shake.prototype.handleEvent = function (e) {
        if (typeof (this[e.type]) === 'function') {
            return this[e.type](e);
        }
    };

    //maakt een nieuw shake event aan
    var myShakeEvent = new Shake();
    myShakeEvent.start();

}(window, document));


var shakeTimeout;
var shakeFadeout;
var shakeFadeoutValue = 1;
function init()
{

    // window.addEventListener('shake', shakeEventDidOccur, false);


}
 //Methode die wordt uitgevoerd als er is geschhud
    function shakeEventDidOccur (data) {
        console.log(data);


        if( shakeTimeout )
        {
            clearTimeout( shakeTimeout );
        }
        shakeTimeout = setTimeout( function()
        {
            stopShaking();
        } , 350);

        socket.emit('shake', {});


    }
function stopShaking()
{


    // alert('STOP SHAKING');
    socket.emit('stopshake', {});
}

window.onload = init;