class Games {
  constructor(thumbnail, title, short_description, genre, platform) {
    this.thumbnail = thumbnail;
    this.title = title;
    this.short_description = short_description;
    this.genre = genre;
    this.platform = platform;
  }
  displayData() {
    itemCard.innerHTML += `
  <div class="col">
  <div class="card bg-transparent text-light">
    <div class="card-body">
      <figure>
        <img class="card-img-top" src=${this.thumbnail} alt="">
      </figure>
      <figcaption>
        <div class="d-flex mb-2 justify-content-between align-items-center">
          <h3 class="h5 mb-0 cardTitle headerFonts">${this.title}</h3>
          <span class="badge bg-primary p-2">Free</span>
        </div>
        <p class="cardNAme opacity-50 text-light text-center">${this.short_description}</p>
      </figcaption>
    </div>
    <footer class="card-footer d-flex justify-content-between align-items-center ">
      <span class="cardNAme badge badge-color">${this.genre}</span>
      <span class="cardNAme badge badge-color">${this.platform}</span>
    </footer>
  </div>
  </div>
  `;
  }
}

export function getGamesss(generateAllGames) {
  for ( let i = 0 ; i < generateAllGames.length ; i++ ) {
    let thumbnail = generateAllGames[i].thumbnail;
    let title = generateAllGames[i].title;
    let short_description = generateAllGames[i].short_description;
    let genre = generateAllGames[i].genre;
    let platform = generateAllGames[i].platform;
    let product = new Games(thumbnail,title,short_description,genre,platform)
    product.displayData()
  }
}