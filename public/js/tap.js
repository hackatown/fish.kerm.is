



var tapTimeout;
function tapEventDidOccur( e )
{

          if( tapTimeout)
          {
                clearTimeout( tapTimeout );
          }
          tapTimeout = setTimeout( function(){

                stopTapping();

          }, 350);

          startTapping();

}


function startTapping()
{
        console.log('startTapping');
        socket.emit('tapstart', {} );
}


function stopTapping()
{
    console.log('stopTapping');
    socket.emit('tapstop', {} );

}
