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


$(document).ready(function{
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


    $("#richiedi, #visiona").click(function(e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $(".career-03-wrapper").offset().top
      }, 1000);
    });
})
