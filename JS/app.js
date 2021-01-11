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
      reply.innerHTML = "";

      for (let i = 0; i < data.data.length; i++) {
        reply.innerHTML += ` <ul id="reply_ul">
         <li id="reply_li">
            <div class="card" style="width: 10rem;">
                  <img class="card-img-top" src="${data.data[i].artist.picture_medium}" alt="Card image cap">
                  <p class="card-text">${data.data[i].title} </br>
                  <h2>${data.data[i].artist.name}<h2></p> 
              <div class="card-container-button">
                  <button id="reply_li_button" <span class="fas fa-play" style="z-index=10006">
              </div>
                  <img src="../favorite.png" id="favoriteButton" class="favOn-favOff icon-favorite" style="z-index=10000">
                  <img src="../favoriteblack.png" id="favoriteOn" class="favOn-favOff fhide icon-favorite" style="z-index=10000">
            </div>
          </li>
        `;
      }
      butContainer = document.getElementById("butContainer");
      reply.innerHTML += `</ul>`;
    });
} /* hacer el boton favorito dentro del bucle con un indicador individual para cada imagen*/

/*butContainer && butContainer.addEventListener("click", function () {
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
    */
// funcion mocky

// function apiSearch(parameter) {
//   let url = `https://run.mocky.io/v3/eb3555e8-3bf4-44cd-b124-63a9d75f0b7f`;
//   fetch(url, {
//     method: "GET",
//     headers: {
//       headerkey: "valuerandom",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       globalSpotify.dataApi = data;
//       console.log(data);

//       for (let i = 0; i < data.data.length; i++) {
//         reply.innerHTML += ` <ul id="reply_ul">
//                              <li id="reply_li"> <img
//                              src="${data.data[i].artist.picture_medium}"
//                              alt="..."
//                              id="reply_img"/>
//                              <div id= "reply_name">
//                            <b id="reply_li_title">${data.data[i].title}</b> <br>
//                            <h3 id="reply_li_h3">${data.data[i].artist.name}
//                            - Album: ${data.data[i].album.title}</h3>
//                            </div>
//                            <button id="reply_li_button" <span class="fas fa-play"></span>Reproducir</button>
//                            </li>
//                           </ul>

//                              `;
//       }
//     });
// }

// carousel
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

// apiSearch("Luis%20Fonsi");

// sidebar;
$(".sidebar-list-main").click(function () {
  $("nav ul .sidebar-list-secondary").toggleClass("secondary");
});
$(".sidebar-list-playlist").click(function () {
  $("nav ul .sidebar-list-tertiary").toggleClass("tertiary");
});
