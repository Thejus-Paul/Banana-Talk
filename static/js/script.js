// Connecting socketio to the server
var socket = io.connect( 'http://' + document.domain + ':' + location.port )
// while socket is connected
var username =  document.cookie;
socket.on( 'connect', function() {
  // On submit of the form the function will return e
  $( 'form' ).submit(function( e ) {
    // To prevent the default action of POST
    e.preventDefault()
    // Sending the object containing username and message
    socket.emit( 'my event', {
      username : document.cookie, // Storing the value from input tag and class username
      message : $( 'input.message' ).val(), // Storing the value from input tag and class message (an extra ',' is used at the end to avoid an error)
    } )
    // empty the input field and focusing
    $('input.message').val('').focus()
  } )
} )
// capture message from the server containing the json object
socket.on( 'my response', function( json ) {
  // To avoid printing 'undefined' value for username and message

  if(json.username !== '' ) {
    // Verifying if the name given is the user or not
    if(username !== json.username){
      // If user is not the same then the message will be displayed in the left side
      $( 'div.messagebox' ).append("<div class='msg_bubble'><strong>"+json.username+"</strong>&nbsp;&nbsp;"+json.message+"</div><br>")
  }
    else{
      // If user is same then the message will be displayed in the right side
      $( 'div.messagebox' ).append("<div class='right_msg_bubble'><strong>"+json.username+"</strong>&nbsp;&nbsp;"+json.message+"</div><br><br>")
    }
  }
})
// Instant scrolling
setInterval(function(){ window.scrollBy(0,1000); }, 1);
