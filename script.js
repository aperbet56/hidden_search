// Récupération des éléments HTML5
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Ecoute de l'événement "click" sur le bouton
btn.addEventListener("click", () => {
  // Ajout ou suppression de la classe active
  search.classList.toggle("active");
  // Place le focus sur l'input
  input.focus();
});
