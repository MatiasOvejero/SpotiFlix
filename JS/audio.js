/* COMANDOS PARA CREAR EL REPRODUCTOR DE AUDIO
var myaudio = new Audio('mysong.mp3');
myaudio.play(); - This will play the music.
myaudio.pause(); - This will stop the music.
myaudio.duration; - Returns the length of the music track.
myaudio.currentTime = 0; - This will rewind the audio to the beginning.
myaudio.loop = true; - This will make the audio track loop.
myaudio.muted = true; - This will mute the track
myaudio.addEventListener('ended',myfunc)' - Esto hará un llamado a 'myfunc()' una vez que el audio haya finalizado.
*/

$(function () {
  var aud = $("audio")[0];
  $(".play-pause").on("click", function () {
    if (aud.paused) {
      aud.play();
      $(".play-pause").removeClass("icon-play");
      $(".play-pause").addClass("icon-stop");
    } else {
      aud.pause();
      $(".play-pause").removeClass("icon-stop");
      $(".play-pause").addClass("icon-play");
    }
  });
  $(".next").on("click", function () {
    aud.src = "another audio source";
  });
  aud.ontimeupdate = function () {
    $(".progress").css("width", (aud.currentTime / aud.duration) * 100 + "%");
  };
});

//console.log(globalSpotify);