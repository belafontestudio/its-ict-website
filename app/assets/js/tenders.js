Parse.initialize("2RD3MsL6Lf8FgGRkgNNehB0r5RvJRr0km7rZb9VS", "ygZYx64QQISpshuwxWhyQgEKGDnXRtvldz9E0VDA");


var tenderCounter = 0;
var totalTenders = 0;
var tendersList;

var tenderCounterClose = 0;
var totalTendersClose = 0;
var tendersListClose;

function getTemplate(tendersList,column){
  var source   = $("#tender-template").html();
  var template = Handlebars.compile(source);
  var html= template({tender:tendersList});

  $('dl.accordion'+column).append(html);
  var allPanels = $('.accordion'+column+' > dd').hide();
  $('.accordion'+column+'> dt > a').click(function() {
//		   allPanels.slideUp();
    $(this).parent().next().toggle("slow");
    return false;
  });
}

function eachTender(tenders,column){
  $( tenders ).each(function( index,tender ) {
    getAttachments(index,tender,column);
  });
  tendersList = tenders;
  totalTenders = tenders.length;
  console.log("totalTenders "+totalTenders);
}

function getAttachments(index,tender,column){
  var Attachment = Parse.Object.extend('Attachment');
  var attachmentQuery = new Parse.Query(Attachment);
  attachmentQuery.equalTo('related', tender);
  attachmentQuery.descending('createdAt');
  attachmentQuery.find({
    success: function(pdfs) {

      tendersList[index].pdfs = pdfs;

      tenderCounter += 1;
      if(tenderCounter == totalTenders){
        getTemplate(tendersList,column);
      }
      console.log("tenderCounter "+tenderCounter);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}


function getTenders(status,column){
  var Tender = Parse.Object.extend("Tender");
  var Attachment = Parse.Object.extend('Attachment');
  var query = new Parse.Query(Tender);
  query.equalTo("active", status);
  query.descending("createdAt");
  query.find({
    success: function(tenders) {
      eachTender(tenders,column);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}


function getTemplateClose(tendersListClose,column){

  var source   = $("#tender-template").html();
  var template = Handlebars.compile(source);
  var html= template({tender:tendersListClose});

  $('dl.accordion'+column).append(html);
  var allPanels = $('.accordion'+column+' > dd').hide();
  $('.accordion'+column+' > dt > a').click(function() {
//		   allPanels.slideUp();
    $(this).parent().next().toggle("slow");
    return false;
  });
}

function eachTenderClose(tenders,column){
  $( tenders ).each(function( index,tender ) {
    getAttachmentsClose(index,tender,column);
  });
  tendersListClose = tenders;
  totalTendersClose = tenders.length;
  console.log("totalTendersClose "+totalTendersClose);
}

function getAttachmentsClose(index,tender,column){
  var Attachment = Parse.Object.extend('Attachment');
  var attachmentQuery = new Parse.Query(Attachment);
  attachmentQuery.equalTo('related', tender);
  attachmentQuery.descending('createdAt');
  attachmentQuery.find({
    success: function(pdfs) {

      tendersListClose[index].pdfs = pdfs;

      tenderCounterClose += 1;
      if(tenderCounterClose == totalTendersClose){
        getTemplateClose(tendersListClose,column);
      }
      console.log("tenderCounterClose "+tenderCounterClose);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}


function getTendersClose(status,column){
  var Tender = Parse.Object.extend("Tender");

  var query = new Parse.Query(Tender);
  query.equalTo("active", status);
  query.descending("createdAt");
  query.find({
    success: function(tenders) {
      eachTenderClose(tenders,column);
    },
    error: function(error) {
      alert("Error: " + error.code + " " + error.message);
    }
  });
}


getTenders(true,"#aperti");
getTendersClose(false,"#chiusi");
