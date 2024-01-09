let detilesBody = document.getElementById("detilesBody");
let currentIndex = 0;

// Get current Index of CLick
export function GetDetails(result) {
  let currentCards = Array.from(document.querySelectorAll(".col"));
  for (let i = 0; i < currentCards.length; i++) {
    currentCards[i].addEventListener("click", () => {
      let currenGameIndex = currentCards.indexOf(currentCards[i]);
      currentIndex = currentCards.indexOf(currentCards[i]);
      let currentGameId = result[currenGameIndex].id;
      myHttpDetiles(currentGameId);
      games.classList.add("d-none");
      details.classList.remove("d-none");
    });
  }
}


// Display current Index of CLick
async function myHttpDetiles(currentGameId) {
  loading.classList.remove("d-none");
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${currentGameId}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9788d6b836mshf075dacbbce8953p184c49jsn653974580939",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const response =await (await fetch(url, options)).json();
  const result =  response;
  let {title,thumbnail,genre,platform,status,description,game_url} = result;
  let details = new GameDetailes(title,thumbnail,genre,platform,status,description,game_url)
  details.displayDetiles()
  loading.classList.add("d-none");
}

class GameDetailes {
  constructor(title,thumbnail,genre,platform,status,description,game_url){
    this.title = title;
    this.thumbnail = thumbnail;
    this.genre = genre;
    this.platform = platform;
    this.status = status;
    this.description = description;
    this.game_url = game_url;
  }
  displayDetiles() {
    detilesBody.innerHTML = `
          <div  class="col-12 col-md-4">
            <figure>
              <img class="w-100" src="${this.thumbnail}" alt="thumbnail">
            </figure>
          </div>
          <div class="col-12 col-md-8 text-light fw-bolder">
            <h3 class="headerFonts">Title: <span>${this.title}</span></h3>
            <p>Category: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.genre}</span></p>
            <p>Platform: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.platform}</span></p>
            <p>Status: <span class="headerFonts badge bg-info text-black text-uppercase p-2">${this.status}</span></p>
            <p>${this.description}</p>
            <a href="${this.game_url}" target="_Blank" class="btn btn-outline-warning text-white">Show Game</a>
          </div>
    `;
  }
}