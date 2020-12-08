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

  /*Este codigo esta escrito en JQuery, no lo hice yo, solo lo copie y modifique algunas cosas.
  Aca les voy a explicar mas o menos que significa cada cosa para que lo puedan leer lo mejor posible,
  pero si tienen alguna consulta me preguntan:
  $ => este es un getElementByClass;
  .on => este funciona como el getElementById;
  COMPARISION es una variable que guarda el elemento que contiene la clase fhide, que le da visibility = hidden
  luego en el if, si comparision es true y el lenght es mayor que 0 le saca la clase fhide al elemento que la tenia.
  sino, se la agrega. 
  esto hace que la estrellita negra aparezca y desaparezca segun el clik*/



  $(".favOn-favOff").on("click", function () {
    let comparision = document.getElementsByClassName("fhide")
    if (comparision && comparision.length>0) {
      $("#favoriteOn").removeClass("fhide");
      //$(".favOn-favOff").addClass("icon-favoriteblack");
    } else {
      $("#favoriteOn").addClass("fhide");
     
    }
  });
});

//console.log(globalSpotify);