Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");

var Announcement = Parse.Object.extend("Announcement");
var query = new Parse.Query(Announcement);
query.equalTo("published", true)
query.descending("createdAt")

query.find({
  success: function(announcement) {
    var source   = $("#announcement-template").html();
    var template = Handlebars.compile(source);
    var context = {title: announcement[0].get("title"), body: announcement[0].get("body")};
    var html= template(context);

    $('body').append(html);
    $("#close").click(function(){
    $("#popupContainer").fadeOut();
    });
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
