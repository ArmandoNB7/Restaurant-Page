// src/home.js
export function loadHome() {
  const content = document.querySelector("#content");

  // Contenedor principal de la pestaña Home
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("tab-content");

  // Titular
  const headline = document.createElement("h1");
  headline.textContent = "El Rincón del Sabor";

  // Texto descriptivo
  const description = document.createElement("p");
  description.textContent =
    "Disfruta de la mejor cocina artesanal en un ambiente acogedor. Platos preparados con ingredientes frescos y recetas tradicionales.";

  // Horario o detalle adicional
  const hours = document.createElement("p");
  hours.textContent = "Abierto de martes a domingo de 12:00 a 23:00 hrs.";

  // Ensamblar los elementos dentro del contenedor
  homeContainer.appendChild(headline);
  homeContainer.appendChild(description);
  homeContainer.appendChild(hours);

  // Inyectar el contenedor en div#content
  content.appendChild(homeContainer);
}