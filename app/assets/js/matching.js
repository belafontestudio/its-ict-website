Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

var studentCounter = 0;
var totalStudents = 0;
var studentsList;

function getTemplate(studentsList){
  var source   = $("#student-template").html();
  var template = Handlebars.compile(source);
  console.log(studentsList);
  var html= template({student:studentsList});
  $('#students').append(html);

}

function eachStudent(students){
  studentsList = students;

  getTemplate(studentsList);

  totalStudents = students.length;
  console.log("totalStudents "+totalStudents);
}

function getStudents(){
  var Student = Parse.Object.extend("Student");

  var query = new Parse.Query(Student);
  // query.equalTo("active", status);
  query.descending("createdAt");
  query.find({
    success: function(students) {
      eachStudent(students);

    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

getStudents();


$(document).ready(function(){
    $('.career-open').click(function(){
      $('.career-switch-container').toggle();
    })

    $("#switch-1").click(function() {
      $('html, body').animate({
          scrollTop: $(".career-01-wrapper").offset().top
      }, 1500);
    });

    $("#switch-2").click(function() {
      $('html, body').animate({
          scrollTop: $(".career-02-wrapper").offset().top
      }, 1500);
    });


    $("#visiona").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(".career-03-wrapper").offset().top
      }, 1000);
    });


    $( "#iphone_menu" ).click(function() {
      event.preventDefault();
      console.log('iphone_menu');
      $( ".iphone_menu" ).toggle( "slow" );
      if ($(this).text() =="MENU"){
        $(this).text("CHIUDI")
      }else{
        $(this).text("MENU");
      }
    });

    var options = {
        // beforeSubmit:  showRequest,
        success:       showResponse,
        error: showError,
        resetForm: true
        // target:        '#output1',
    };

    $('#matching-form').ajaxForm(options);
});

// pre-submit callback
function showRequest(formData, jqForm, options) {
    // formData is an array; here we use $.param to convert it to a string to display it
    // but the form plugin does this for you automatically when it submits the data
    var queryString = $.param(formData);

    // jqForm is a jQuery object encapsulating the form element.  To access the
    // DOM element for the form do this:
    // var formElement = jqForm[0];

    //alert('About to submit: \n\n' + queryString);
    return true;
}

function showError() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');

    'use strict';
    var data = {message: 'È successo un errore. Riprova '};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
}


function showResponse(responseText, statusText, xhr, $form)  {
    // alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +'\n\nThe output div should have already been updated with the responseText.');
    'use strict';
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#demo-show-toast');

      'use strict';
      var data = {message: 'Mail Inviata con successo '};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);

}


(function() {
  'use strict';
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var showToastButton = document.querySelector('#demo-show-toast');
  showToastButton.addEventListener('click', function() {
    'use strict';
    var data = {message: 'Mail Inviata con successo! '};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  });
}());
