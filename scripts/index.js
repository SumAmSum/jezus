//index.js
let audioPlaying = true,
backgroundAudio,browser;
browser = navigator.userAgent.toLowerCase();
$('<audio class="audio1" src="https://sumamsum.github.io/jezus/uploads/jezus_kristus_kak_smo_zejni.mp3" loop></audio>').prependTo('body');
if (!browser.indexOf('firefox') > -1) {
    $('<embed id="background-audio" src="https://sumamsum.github.io/jezus/uploads/jezus_kristus_kak_smo_zejni.mp3" autostart="1"></embed>').prependTo('body');

 backgroundAudio = setInterval(function() {
      $("#background-audio").remove();
       $('<embed id="background-audio" src="https://sumamsum.github.io/jezus/uploads/jezus_kristus_kak_smo_zejni.mp3"></embed>').prependTo('body');
      }, 36000);
      //36000 is the duration of your audio which in this case 36 seconds.
}
$(".toggle-audio").on('click', function(event) {
 audioPlaying = !audioPlaying;
 $("#background-audio").remove();

 clearInterval(backgroundAudio);
 if(audioPlaying){
    $(".audio1").play();
    //play audio 
  }else{
    $(".audio1").pause();

}
