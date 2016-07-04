Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

var studentCounter = 0;
var totalStudents = 0;
var studentsList;

function getStudentsTemplate(studentsList,year){
  var source   = $("#student-template").html();
  var template = Handlebars.compile(source);

  var html= template({student:studentsList});
  $('#students').append(html);
  $('#years').show();
  if(studentsList.length > 0){
    $('.student-title').text("Anno "+year);
  }else{
    $('.student-title').text("Non sono presenti studenti con questo filtro");
  }
  $('html, body').animate({
    scrollTop: $(".career-03-wrapper").offset().top
  }, 1000);

}


function eachStudent(students,selectedYear, totalStudents){


  studentsList = students;
  getStudentsTemplate(studentsList,selectedYear);

  totalStudents = students.length;
  if(totalStudents == 0){
    $('#years').show();
    $('.student-title').text("Non sono presenti studenti con questo filtro");
    $('html, body').animate({
      scrollTop: $(".career-03-wrapper").offset().top
    }, 1000);
  }
  console.log("totalStudents "+totalStudents);
}

function getStudents(courses,year){

  var Student = Parse.Object.extend("Student");

  var query = new Parse.Query(Student);
  console.log("anno"+year)
  query.containedIn("course", courses);
  query.include("year");
  var yearQuery = new Parse.Query("Year");
  yearQuery.equalTo('year', year);
  query.matchesQuery("year", yearQuery);
  query.descending("createdAt");
  query.find({
    success: function(students) {
      eachStudent(students,year);


    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

var yearCounter = 0;
var totalYears = 0;
var yearsList;

function getTemplate(yearsList){
  var source   = $("#year-template").html();
  var template = Handlebars.compile(source);
  // console.log(yearsList);
  var html= template({year:yearsList});
  $('#filter').prepend(html);
}



function getYears(){
  var Year = Parse.Object.extend("Year");

  var query = new Parse.Query(Year);
  // query.equalTo("active", status);
  query.find({
    success: function(years) {
      yearsList = years;
      getTemplate(yearsList);

      totalYears = years.length;
      console.log("totalYears "+totalYears);

    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}
getYears();



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


    $("form#filter").click(function(){
      $('#years').hide();
    })

    $(".career-03-wrapper").on("click", "button.student", function() {
      $(this).parent().fadeOut();
      $(".contact-form").fadeIn();
      var  studentToSend = $(this).parent().siblings(".career-profile-head-name").children("h2").text();

      $("input#student-to-send").val(studentToSend);
      $('html, body').animate({
          scrollTop: $(".contact-form").offset().top
      }, 1500);
    });

    $(".career-03-wrapper").on("click", "button.chiudi", function() {
      $('.career-profile-head-button').fadeIn();
      $(".contact-form").fadeOut();
    });









    // $("#visiona").click(function(e) {
    //   e.preventDefault();
    //   $('html, body').animate({
    //       scrollTop: $(".career-03-wrapper").offset().top
    //   }, 1000);
    // });


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
    var options2 = {
        beforeSubmit:  showRequest2,
        success:       showResponse2,
        error: showError
        // target:        '#output1',
    };
    var options3 = {
        beforeSubmit:  showRequest,
        success:       showResponse,
        error: showError,
        clearForm: false
        // target:        '#output1',
    };

    $('#matching-form, #matching-form0').ajaxForm(options);
    $('#filter').ajaxForm(options2);
    $('#richiedi0').ajaxForm(options3);
});
function cleanStudents(){
  studentCounter = 0;
  totalStudents = 0;

  $("#students").empty();
}

function showRequest2(formData, jqForm, options) {
    cleanStudents();
    var queryString = $.param(formData);
    var courses=[];
    var year= formData[0].value;

    if(formData[2]){
      courses.push(formData[2].value);
    }
    if(formData[3]){
      courses.push(formData[3].value);
    }
    if(formData[4]){
      courses.push(formData[4].value);
    }

    getStudents(courses,year);

    return true;
}

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

    $('.contact-form').fadeOut();

}


function showResponse2(responseText, statusText, xhr, $form)  {
    // alert('status: ' + statusText + '\n\nresponseText: \n' + responseText +'\n\nThe output div should have already been updated with the responseText.');
    'use strict';
    var snackbarContainer = document.querySelector('#demo-toast-example');
    var showToastButton = document.querySelector('#demo-show-toast');

    'use strict';

    //var data = {message: 'Abbiamo trovato ' + totalStudentss + ' studenti'};
    var data = {message: 'Ricerca completata'};
    snackbarContainer.MaterialSnackbar.showSnackbar(data);

    $('.career-profile-head-button button').fadeIn();

}
