function deviceMotionHandler(eventData) {
     // Grab the rotation rate from the results
      var rotation = eventData.rotationRate;

      socket.emit('bass', Math.round(eventData.beta));
}