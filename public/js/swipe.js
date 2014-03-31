



var swipeTimeout;
function swipeEventDidOccur( e )
{

          if( swipeTimeout)
          {
                clearTimeout( swipeTimeout );
          }
          swipeTimeout = setTimeout( function(){

                stopSwiping();

          }, 350);

          startSwiping();

}


function startSwiping()
{
        console.log('startswipeping');
        socket.emit('swipestart', {} );
}


function stopSwiping()
{
    console.log('stopswipeping');
    socket.emit('swipestop', {} );

}
