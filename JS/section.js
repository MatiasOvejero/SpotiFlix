"use strict";
const player = document.getElementById("infoPlayer");

let datapi;
const card = document.getElementById("carouselExampleControls");
const audio = document.getElementById("audio-id");
/*setTimeout es una funcion que se utiliza para declarar un tiempo de ejecucion (en este caso: 1000 milisegundos es 1 segundo)*/
setTimeout(function () {
  datapi = globalSpotify.dataApi;
  console.log(datapi);

  card.innerHTML = `<div class="carousel-inner">
    `;
  datapi.data.forEach((e, index) => {
    card.innerHTML += `
    
              <div class="carousel-item ${index === 0 ? "active" : ""}">
                <div class="card card-position" style="width: 20rem">
                  <img
                    id="img-card"
                    src="${e.artist.picture_big}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h1 class="card-title">${e.artist.name}</h1>
                    <p class="card-text">${e.album.title}</p>
                    <p class="card-te">${e.title}</p>
                    <div id="section-play${index}" class="iconfont play-pause icon-play"></div>
                   
                  </div>
                </div>
              
    `;
  });
  card.innerHTML += `</div>`;
}, 1000);

/*Se realizó otro setTimeout para que la siguiente función cargue después de la anterior.
Se aplica un for para recorrer el largo del elemento seleccionado de datapi.
Se crea una constante para que cada botón de play de cada card tenga su evento de click.
Se valida que el botón esté pausado para agregar y reproducir la canción, si no es así no se agrega ni reproduce. */
setTimeout(function () {
  for (let i = 0; i < datapi.data.length; i++) {
    const idPlay = `section-play${i}`;
    document.getElementById(idPlay).addEventListener("click", function () {
      if (document.getElementById("audio-id").paused) {
        document.getElementById("audio-id").src = datapi.data[i].preview;
        audio.play();
        player.innerHTML = `
          <div class="info">
            <div><img id="img-player" src="${datapi.data[i].artist.picture_big}"class="card-img-top" alt="..."/></div>
            <div class = "artist-title">
              <div class="name">${datapi.data[i].title}</div>
              <div class="singer">${datapi.data[i].artist.name}</div>
            </div>
          </div>`;
        $(".play-pause").removeClass("icon-play");
        $(".play-pause").addClass("icon-stop");
      } else {
        audio.pause();
        $(".play-pause").removeClass("icon-stop");
        $(".play-pause").addClass("icon-play");
      }
    });
  }
}, 3000);

/*Informacion que se muestra en la baraa de reproduccion*/
