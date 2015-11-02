Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");
var Candidate = Parse.Object.extend('Candidate');


function isAuthenticated() {
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    // you can do this however you want with whatever variables you set up
    console.log("check authentication");
    if(Parse.User.current()){
        console.log("authenticated");
    }else{
        window.location.href = "/login.html";
    }

}

function isCandidatesActive(){
  var query = new Parse.Query(Candidate);
  query.descending('createdAt');
  query.find().then(function(candidates) {

    var active = _.some(candidates,function(candidate){ return candidate.get("active") === true});

    if(!active){
      console.log("candidates inactive");
      //window.location.href = "/candidature_chiuse.html";
    }
  });
}


function deleteAttachment(id){

  var Attachment = Parse.Object.extend('UserAttachment');
  var attachment = new Attachment();
  attachment.id = id;

  attachment.destroy({
    success: function() {
      window.location.href = "/profilo.html";
    },
    error: function( error) {
      console.log(error);
    }
  });

}

function deleteButton(){

  $( ".delete" ).submit(function( event ) {
    event.preventDefault();
    var formAction = $(this).attr("action");
    deleteAttachment(formAction);
  });
}

function updateProfile(id,name,surname,courses,date,fiscale,email){
  var user = new Parse.User();
  user.id = id;
  user.set("name", name);
  user.set("surname", surname);
  user.set("courses", courses);
  user.set("birthday", date);
  user.set("email", email);
  user.set("username", email);
  user.set("fiscal", fiscale);
  user.set("admin", false);
  user.set("candidate", true);
  user.set("contact", "website");
  // other fields can be set just like with Parse.Object
  user.save(null, {
    success: function(user) {
      Parse.User.logOut();
      window.location.href = "/candidature_successo.html";
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
}


function getTemplate(attachments){
  var source   = $("#attachment-template").html();
  var template = Handlebars.compile(source);
  var html= template({attachment:attachments});

  $("#attachments").append(html);
  deleteButton();
}

function getAttachments(){
  var Attachment = Parse.Object.extend('UserAttachment');
  var attachmentQuery = new Parse.Query(Attachment);
  attachmentQuery.equalTo('related', Parse.User.current());
  attachmentQuery.descending('createdAt');
  attachmentQuery.find({
    success: function(userAttachments) {

        getTemplate(userAttachments);


    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function logOut(){
  $("#logout").click(function(e){
    e.preventDefault();
    if(Parse.User.current()){
      Parse.User.logOut();
      window.location.href = "/login.html";
    }
  })
}

$( "#update" ).submit(function( event ) {
  event.preventDefault();
  var name = $("input#name").val();
  var id = $("input#userid").val();
  var surname = $("input#surname").val();
  var password = $("input#password").val();
  var courses = [];
  var birthday = $("input#birthday").val();
  var email = $("input#email").val();
  var fiscale = $("input#fiscale").val();
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
  updateProfile(id,name,surname,courses,date,fiscale,email);
});

$( document ).ready(function() {
  isAuthenticated();
  isCandidatesActive();
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

  if(Parse.User.current()){
    $("#name").val(Parse.User.current().get("name"));
    $("#surname").val(Parse.User.current().get("surname"));
    $("#email").val(Parse.User.current().getUsername());
    $("#userid").val(Parse.User.current().id);
    $("#fiscale").val(Parse.User.current().get("fiscal"));
    var time = Parse.User.current().get("birthday");
    $("#birthday").val(moment(time).format('DD/MM/YY'));
    var courses = Parse.User.current().get("courses");
    var mobileapp = _.some(courses, function(c) {
                  return c == 'Mobile App Design';
              });
    var videomaking = _.some(courses, function(c) {
              return c == 'Videomaking';
          });

    $("#checkbox-1").prop('checked',mobileapp);
    $("#checkbox-2").prop('checked',videomaking);

    getAttachments();

  }
  logOut();



});
