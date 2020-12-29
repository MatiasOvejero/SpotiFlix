const library = document.getElementById("library");
let array1 = ["hola" , "chau" , "tuvieja"];
const marker = document.getElementById("marker");
const newFavorites = document.getElementById("newFavorites");
  

marker.addEventListener("click", function () {
    newFavorites.innerHTML = "";
    for (let e = 0; e < array1.length; e++) {
        newFavorites.innerHTML += `
        <li class="sidebar-list-tertiary juan"><a href="#"><span class="fa-angle-down" aria-hidden="false"></span>${array1[e]}</a></li>
        `
        console.log(array1[e]);
    };

});

