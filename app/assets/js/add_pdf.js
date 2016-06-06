Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");
var Candidate = Parse.Object.extend('Candidate');

var userUploadable = false;
var userFile;
var loader = $("#loader");
var userUploadInput = $('#useruploadfile');


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


function userUploadFile(){
	var serverUrl = 'https://api.parse.com/1/files/' + userFile.name;

	$.ajax({
		type: "POST",
		beforeSend: function(request) {
			request.setRequestHeader("X-Parse-Application-Id", '2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS');
			request.setRequestHeader("X-Parse-REST-API-Key", 'Pu2r6VO4K1Wp6XIZkKyG4wu9A4YqaWsHeaVgnvfc');
			request.setRequestHeader("Content-Type", userFile.type);
		},
		url: serverUrl,
		data: userFile,
		processData: false,
		contentType: false,
		success: function(data) {
			var pdfTitle = $("#usertitle").val();
			console.log("File available at: " + data.url);
			var pdf = new Parse.Object("UserAttachment");
			pdf.set("title", pdfTitle);
			pdf.set("url", data.url);

			pdf.set({userFile: {"name": data.name,"url": data.url,"__type": "File"}});
			pdf.save().then(function(pdf) {
						var relatedID = Parse.User.current().id;
						var query = new Parse.Query("User");
							query.select("id", relatedID);
							query.get(relatedID).then(function(user) {

								pdf.set("related", user);
								pdf.save().then(function(){
									loader.fadeOut();
									var url = "/profilo.html";
									$(location).attr('href',url);
								});

						});

			})

		},
		error: function(data) {
			var obj = $.parseJSON(data);
			console.log(obj.error);
		}
	});
}


function userFileUploader(){
	console.log("user fileupload");


  // Set an event listener on the Choose File field.
  $('#userfileselect').bind("change", function(e) {

    var files = e.target.files || e.dataTransfer.files;
    // Our file var now holds the selected file
    userFile = files[0];
		if (userUploadable && typeof userFile != 'undefined'){

			userUploadInput.removeAttr('disabled');
		}
  });

	var titleField = $('#usertitle');
	titleField.keyup(function(e) {
		if(titleField.val().length > 1){

			userUploadable = true;
		}else{
			userUploadable = false;
		}
	});


  // This function is called when the user clicks on Upload to Parse. It will create the REST API request to upload this image to Parse.
	userUploadInput.click(function(e) {
		e.preventDefault();
		console.log(userFile)
		if (userUploadable && typeof userFile != 'undefined'){

			console.log("uploadfile");
			loader.fadeIn();
	    userUploadFile();
		}
  });
}


$(document).ready(function(){
  isAuthenticated();
  isCandidatesActive();
	userFileUploader();

});
