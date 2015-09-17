Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

$( document ).ready(function() {
  $('.datepicker').pickadate({
    selectYears: 60,
    firstDay: 1,
    selectMonths: true,
    formatSubmit: 'dd/mm/yyyy',
    format: 'dd/mm/yyyy',
    hiddenName: true,
    monthsFull: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    weekdaysFull: ['Domenica', 'Lunedì', 'Martedi', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
    showWeekdaysFull: true,
    today: 'Oggi',
    clear: 'Pulisci',
    close: 'Chiudi',
    onSet: function(context) {
      $("label.birthday").addClass("isSet");
    }
  });

  signUpForm();
});


function signUpForm(){
  $( "#signup" ).submit(function( event ) {
    event.preventDefault();
    var name = $("input#name").val();
    var surname = $("input#surname").val();
    var password = $("input#password").val();
    var courses = [];
    var birthday = $("input#birthday").val();
    var email = $("input#email").val();
    if($("#checkbox-1").is(':checked')){
      var course1 = $("#checkbox-1").val();

      courses.push(course1);
    }
    if($("#checkbox-2").is(':checked')){
      var course2 = $("#checkbox-2").val();
      courses.push(course2);
    }

    var dt   = parseInt(birthday.substring(0,2));
    var mon  = parseInt(birthday.substring(3,5));
    var yr   = parseInt(birthday.substring(6,10));
    var date = new Date(yr, mon-1, dt);
    signUp(name,surname,password,courses,date,email);
  });

}

function signUp(name,surname,password,courses,date,email){
  var user = new Parse.User();
  user.set("name", name);
  user.set("surname", surname);
  user.set("password", password);
  user.set("courses", courses);
  user.set("birthday", date);
  user.set("email", email);
  user.set("username", email);
  user.set("admin", false);
  user.set("contact", "website");

  // other fields can be set just like with Parse.Object

  user.signUp(null, {
    success: function(user) {
      Parse.User.logOut();
      window.location.href = "/success.html";
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.

      alert("Error: " + error.code + " " + error.message);
    }
  });
}
