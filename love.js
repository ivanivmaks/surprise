const earth = document.querySelector(".earth");
const earthBtn = document.querySelector(".earth-btn");
const sun = document.querySelector(".sun");
const sunBtn = document.querySelector(".sun-btn");
const solar = document.querySelector(".solar");
const solarBtn = document.querySelector(".solar-btn");
const galaxy = document.querySelector(".galaxy");
const galaxyBtn = document.querySelector(".galaxy-btn");
const universe = document.querySelector(".universe");
const universeBtn = document.querySelector(".universe-btn");
const love = document.querySelector(".love");

earthBtn.addEventListener("click", handleEarth);

function handleEarth(event) {
  event.preventDefault();
  earth.classList.add("hidden");
  sun.classList.remove("hidden");
}

sunBtn.addEventListener("click", handleSun);

function handleSun(event) {
  event.preventDefault();
  sun.classList.add("hidden");
  solar.classList.remove("hidden");
}

solarBtn.addEventListener("click", handleSolar);

function handleSolar(event) {
  event.preventDefault();
  solar.classList.add("hidden");
  galaxy.classList.remove("hidden");
}

galaxyBtn.addEventListener("click", handleGalaxy);

function handleGalaxy(event) {
  event.preventDefault();
  galaxy.classList.add("hidden");
  universe.classList.remove("hidden");
}

universeBtn.addEventListener("click", handleUniverse);

function handleUniverse(event) {
  event.preventDefault();
  universe.classList.add("hidden");
  love.classList.remove("hidden");
}
