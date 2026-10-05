// src/menu.js
export function loadMenu() {
  const content = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Nuestro Menú";

  const itemList = document.createElement("ul");

  const items = [
    { name: "Pasta Carbonara Tradicional", price: "$12.50" },
    { name: "Pizza Artesanal Margarita", price: "$14.00" },
    { name: "Risotto de Setas y Trufa", price: "$16.00" },
    { name: "Tiramisú Casero", price: "$6.50" },
  ];

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.price}`;
    itemList.appendChild(li);
  });

  menuContainer.appendChild(title);
  menuContainer.appendChild(itemList);
  content.appendChild(menuContainer);
}