Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

function logIn(){

  var user = $("#email").val();
  var password = $("#password").val();

  Parse.User.logIn(user,password).then(function() {
    // Login succeeded, redirect to homepage.
    // parseExpressCookieSession will automatically set cookie.
    console.log("Login success");

    window.location.href = "/profilo.html";
  },
  function(error) {
    // Login failed, redirect back to login form.
    console.log("Login failed");
    window.location.href = "/login.html";
  });
}

function logInForm(){
  $( "#login" ).submit(function( event ) {
    event.preventDefault();
    logIn();
  });
}
$( document ).ready(function() {


  logInForm();
});
