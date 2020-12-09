let datapi;
const card = document.getElementById("carouselExampleControls");
const audio = document.getElementById("audio-id");

setTimeout(function () {
  datapi = globalSpotify.dataApi;
  console.log(datapi);

  card.innerHTML += `
  <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card card-position" style="width: 20rem">
                <img
                  id="img-card"
                  src="${datapi.data[0].artist.picture_big}"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h1 class="card-title">${datapi.data[0].artist.name}</h1>
                  <p class="card-text">${datapi.data[0].album.title}</p>
                  <p class="card-te">${datapi.data[0].title}</p>
                  <div id="section-play" class="iconfont play-pause icon-play"></div>
                 
                </div>
              </div>
            </div>
  `;
  document
    .getElementById("section-play")
    .addEventListener("click", function () {
      document.getElementById("audio-id").src = datapi.data[0].preview;
      audio.play();
    });
}, 1000);
