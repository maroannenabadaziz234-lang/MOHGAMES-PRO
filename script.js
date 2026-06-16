/* =========================
MOHGAMES PRO - FIXED SCRIPT
========================= */

/* =========================
Slider
========================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

if (slides.length > 0) {
setInterval(() => {
slides[currentSlide].classList.remove("active");

currentSlide++;
if (currentSlide >= slides.length) currentSlide = 0;

slides[currentSlide].classList.add("active");

}, 5000);
}

/* =========================
Games Render
========================= */

const gamesContainer = document.getElementById("gamesContainer");
let filteredGames = [];

/* تشغيل بعد تحميل كل الملفات */
window.addEventListener("load", () => {
initGames();
});

function initGames() {
if (!window.games || window.games.length === 0) {
console.error("❌ games.js لم يتم تحميله");
return;
}

filteredGames = window.games;
renderGames(filteredGames);
}

/* =========================
Render Games
========================= */

function renderGames(list) {

if (!gamesContainer) return;

gamesContainer.innerHTML = "";

list.forEach(game => {

const rating = localStorage.getItem("rating_" + game.id) || 0;

gamesContainer.innerHTML += `
<div class="card">

<img src="${game.image}" alt="${game.name}">

<div class="card-content">

<h3>${game.name}</h3>
<p>${game.description}</p>
<p><strong>${game.platform}</strong></p>

<div class="rating">

<span onclick="rateGame(${game.id},1)">★</span>
<span onclick="rateGame(${game.id},2)">★</span>
<span onclick="rateGame(${game.id},3)">★</span>
<span onclick="rateGame(${game.id},4)">★</span>
<span onclick="rateGame(${game.id},5)">★</span>

<small>${rating}/5</small>

</div>

<div class="btns">

<button class="btn details-btn" onclick="openGame(${game.id})">
التفاصيل
</button>

<button class="btn download-btn" onclick="window.open('${game.download}','_blank')">
تحميل
</button>

</div>

</div>
</div>
`;
});
}

/* =========================
Rating System
========================= */

function rateGame(id, rating) {
localStorage.setItem("rating_" + id, rating);
renderGames(filteredGames);
}

/* =========================
Open Game Page
========================= */

function openGame(id) {
localStorage.setItem("selectedGame", id);
window.location.href = "game.html";
}

/* =========================
Search & Filter
========================= */

const searchInput = document.getElementById("searchInput");
const platformFilter = document.getElementById("platformFilter");

function applyFilters() {

if (!window.games) return;

let search = searchInput ? searchInput.value.toLowerCase() : "";
let platform = platformFilter ? platformFilter.value : "all";

filteredGames = window.games.filter(game => {

let matchName = game.name.toLowerCase().includes(search);

let matchPlatform =
platform === "all" || game.platform === platform;

return matchName && matchPlatform;
});

renderGames(filteredGames);
}

if (searchInput) {
searchInput.addEventListener("input", applyFilters);
}

if (platformFilter) {
platformFilter.addEventListener("change", applyFilters);
}