let navlinks = document.querySelectorAll(".navlink");
let itemCard = document.getElementById("itemCard");

for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", (e) => {
    removeActive();
    e.target.classList.add("active");
    myHttp(e.target.innerHTML);
  });
}
function removeActive() {
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].classList.remove("active");
  }
}

async function myHttp(searshGames) {
  loading.classList.remove("d-none");
  itemCard.innerHTML = "";
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${searshGames}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9788d6b836mshf075dacbbce8953p184c49jsn653974580939",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response = await (await fetch(url, options)).json();
  let generateAllGames = response;
  getGamesss(generateAllGames)
  GetDetails(generateAllGames)
  loading.classList.add("d-none");
}

myHttp("mmorpg");

import {getGamesss} from "./ui.js"
import {GetDetails} from "./details.js"