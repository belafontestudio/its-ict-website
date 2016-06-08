$(document).ready(function() {

  $('#fullpage').fullpage({
  verticalCentered: true,
  slidesColor: ['#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B'],
  anchors: ['home','campus', 'mobile', 'coding','video', 'aziende', 'contatti'],
  menu: '#menu',
  fixedElements: '#menu',
  navigation:true,
  navigationPosition: 'left',
  navigationTooltips: ['Home','Campus', 'Mobile', 'Coding','Video', 'Aziende', 'Contatti'],
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  loopHorizontal: false,
  touchSensitivity: 10,
  lockAnchors: true,
  autoScrolling: false,
  scrollOverflow: true,
  css3: true
  });


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


});

$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
