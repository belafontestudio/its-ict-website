jQuery(document).ready(function($) {

  console.log('ready');

  $('#fullpage').fullpage({
  verticalCentered: true,
  slidesColor: ['#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B', '#607D8B'],
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
  autoScrolling: true,

  scrollOverflow: true,

  css3: true
  });








});
