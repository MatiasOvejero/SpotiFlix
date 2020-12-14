let globalSpotify = {};
let array = [];
const inputSearch = document.getElementById("inputSearch");
const butonSearch = document.getElementById("butonSearch");

function apiSearch(parameter){  
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
    console.log(data, "no anda");
  });
}

/*function mockSearch(parameter){
  let url =`http://demo5120416.mockable.io/`;
  fetch(url,{
    method:"GET",
    headers: {
      "headerkey": "valuerandom";
    },
  })
  .then((response)=> response.json())
  .then((data) =>{
    globalSpotify.dataApi = data;
    console.log(data);
  });
} */

inputSearch.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    butonSearch.click();
  }
});

butonSearch.addEventListener("click", function () {
  const input = document.getElementById("inputSearch").value;
  let correctInput=input.split(" ").join("%20");
  apiSearch(correctInput)
});

