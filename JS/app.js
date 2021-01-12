let globalSpotify = {};
let array = [];
let inputSearch = document.getElementById("inputSearch");
const butonSearch = document.getElementById("butonSearch");
const favbuton = document.getElementById("favbuton");
const reply = document.getElementById("reply");
let butContainer = "";
const carouselExampleControls = document.getElementById(
  "carouselExampleControls"
);
const prev = document.getElementById("prev");
const next = document.getElementById("next");

favbuton.addEventListener("click", function () {
  if (carouselExampleControls.style.display === "none") {
    carouselExampleControls.style.display === "block";
    prev.style.display === "block";
    next.style.display === "block";
    reply.style.display === "none";
  } else {
    carouselExampleControls.style.display === "none";
    prev.style.display === "none";
    next.style.display === "none";
  }
});

function apiSearch(parameter) {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "block";
  let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${parameter}`;
  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "2a32dd8292mshc84dae1dcfd222ep15da8cjsn337b56715c7c",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      globalSpotify.dataApi = data;
      console.log(data);
      if (data) {
        preloader.style.display = "none";
        printData(data);
      }
    });
} /* hacer el boton favorito dentro del bucle con un indicador individual para cada imagen*/

function printData(data) {
  reply.innerHTML = `<ul id="reply_ul">`;

  for (let i = 0; i < data.data.length; i++) {
    reply.innerHTML += ` 
        <li class="reply_card">
          <div id="reply_li"> 
            <img
            src="${data.data[i].artist.picture_medium}"
            alt="..."
            id="reply_img"/>
            <div id="reply_name">
              <b id="reply_li_title">${data.data[i].title}</b> 
              <br>
              <h3 id="reply_li_h3">${data.data[i].artist.name}
              - Album: ${data.data[i].album.title}</h3>
            </div>
          </div>
          <div class="reply_actions">
            <div id="butContainer">
              <img src="../favorite.png" id="favoriteButton" class="favOn-favOff icon-favorite" style="z-index=10000"/>
              <img src="../favoriteblack.png" id="favoriteOn" class="favOn-favOff fhide icon-favorite" style="z-index=10000"/>
            </div>
            <button class="reply_button" >
              <span class="fas fa-play"></span>Reproducir
            </button>
          </div>
        </li>  
          `; 
    
  }
  
  reply.innerHTML += `</ul>`;
  butContainer = document.getElementById("butContainer");
 
  console.log(apiSearch);
}

/*Funcionalidad del boton FAVORITOS de la barra de navegacion*/
/* const favs = document.getElementById("favbuton");
  favs.addEventListener("click", function() {
    if (favs.classList.contains("hideFav"))
      
  });*/
/*----------------------------------------------------------*/

butContainer &&
  butContainer.addEventListener("click", function () {
    buttonOf = document.getElementById("favoriteButton");
    buttonOn = document.getElementById("favoriteOn");

    if (buttonOf.classList.contains("hideFav")) {
      buttonOn.classList.remove("hideFav");
      buttonOn.classList.add("favList");
    } else {
      buttonOn.classList.remove("favList");
      buttonOn.classList.add("hideFav");
    }
  });

inputSearch.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    butonSearch.click();
  }
});

butonSearch.addEventListener("click", function () {
  const input = document.getElementById("inputSearch").value;
  let correctInput = input.split(" ").join("%20");
  apiSearch(correctInput);
});

//aca arriba tiene que ir el carrusel con la lista de favoritos por defecto.-

// sidebar;
$(".sidebar-list-main").click(function () {
  $("nav ul .sidebar-list-secondary").toggleClass("secondary");
});
$(".sidebar-list-playlist").click(function () {
  $("nav ul .sidebar-list-tertiary").toggleClass("tertiary");
});

const playerPermanent = document.getElementById("infoPlayer");
playerPermanent.innerHTML = `
          <div class="info">
            <div><img id="img-player" src="./nota-musical.png"class="card-img-top" alt="..."/></div>
            <div class = "artist-title">
              <div class="name">Título</div>
              <div class="singer">Artista</div>
            </div>
          `;
playerPermanent.innerHTML += `</div>`;
