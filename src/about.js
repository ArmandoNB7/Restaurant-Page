// src/about.js
export function loadAbout() {
  const content = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Contacto y Ubicación";

  const address = document.createElement("p");
  address.textContent = "Dirección: Av. Principal 123, Centro Histórico.";

  const phone = document.createElement("p");
  phone.textContent = "Teléfono de reservas: +34 555 123 456";

  const email = document.createElement("p");
  email.textContent = "Correo: reservas@elrincondelsabor.com";

  aboutContainer.appendChild(title);
  aboutContainer.appendChild(address);
  aboutContainer.appendChild(phone);
  aboutContainer.appendChild(email);
  content.appendChild(aboutContainer);
}