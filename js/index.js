import * as allGames from "./games.js"
import * as allui from "./ui.js"
import * as alldetails from "./details.js"
let CloseBtn = document.getElementById("CloseBtn");
let games = document.getElementById("games");
let details = document.getElementById("details");

CloseBtn.addEventListener("click", () => {
  closeBtnn();
});

function closeBtnn() {
  games.classList.remove("d-none");
  details.classList.add("d-none");
}
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    closeBtnn();
  }
});