jQuery(document).ready(function($) {

  console.log('ready');



  // //plugin function, place inside DOM ready function
  // outdatedBrowser({
  // bgColor: '#3f3f3f',
  // color: '#fff',
  // lowerThan: 'IE10'
  // });

  $("#close").click(function(){
    $("#popup").fadeOut();
    $(".topintro").css( "margin-top", "10%");
  });

  console.log('preiphone');
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

  $( ".iphone_menu li a" ).click(function() {
    console.log('click')
    $( ".iphone_menu" ).toggle( "slow" );
    if ($("#iphone_menu").text() =="MENU"){
      $("#iphone_menu").text("CHIUDI")
    }else{
      $("#iphone_menu").text("MENU");
    }
  });





});

$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
