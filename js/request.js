Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

function requestReset(){

  var user = $("#email").val();

  Parse.User.requestPasswordReset(user, {
  success: function() {
  // Password reset request was sent successfully
    alert("Clicca sul link nella mail che ti abbiamo appena inviato per resettare la password");
  },
  error: function(error) {
    // Show the error message somewhere
    alert("Error: " + error.code + " " + error.message);
  }
});
}

function requestForm(){
  $( "#request" ).submit(function( event ) {
    event.preventDefault();
    requestReset();
  });
}
$( document ).ready(function() {


  requestForm();
});
