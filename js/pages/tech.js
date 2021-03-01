// Video modal
let iframVideo = document.querySelector('#video-iframe')
document.querySelector('.sharp2__play-btn').addEventListener('click',function(){
        document.querySelector('.popup-video').style.display = 'flex'
})
let modal = document.getElementById('popup');
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      $('iframe').attr('src', $('iframe').attr('src'));
    }
}
$(function(){
    $('.close').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
        document.querySelector('.popup-video').style.display = 'none'
    });
});