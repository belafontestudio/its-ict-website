


function toggleSection(){

  $('.content-transparency-single-title').click(function(){
    $(this).siblings('.content-transparency-single-list').slideToggle();
  })



}


$( document ).ready(function() {
    toggleSection();
});
