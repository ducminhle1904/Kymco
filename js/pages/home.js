var flkty = new Flickity('.carousel');
var carouselStatus = document.querySelector('.number');

function updateStatus() {
  var slideNumber = flkty.selectedIndex + 1;
  carouselStatus.textContent = slideNumber + '/' + flkty.slides.length;
}
updateStatus();

flkty.on( 'select', updateStatus );
