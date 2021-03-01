// Menu scroll change background color
let $slider = document.querySelector('.slider');
let $header = document.querySelector('header');
window.addEventListener('scroll',function(){
    let scrollTop = document.querySelector('html').scrollTop;
    if(scrollTop >  $header.offsetHeight){
        $header.style.background = 'black'
    }else{
        $header.style.background = 'rgba(0, 0, 0, 0.2)'
    }
})

$(document).ready(function () {
    //Menu button on click event
    $('.mobile-nav-button').on('click', function() {
      // Toggles a class on the menu button to transform the burger menu into a cross
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
      
      // Toggles a class that slides the menu into view on the screen
      $('.mobile-menu').toggleClass('mobile-menu--open');
      return false;
    }); 
  });

  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "flex";
    }
    });
  }
  AOS.init({
    duration: 1500
  });