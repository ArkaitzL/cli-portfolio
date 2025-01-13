import { componentes } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {

  const elemento = document.getElementById("help-list");

  if (!elemento) {
    console.error("Contenedor de ayuda no encontrado");
    return;
  }

  // Crear la lista de comandos
  const lista = document.createElement("ul");
  lista.className = "mt-4 space-y-2";

  componentes.forEach((componente) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <span class="text-text-destacado2 pl-4"> > ${componente.name}</span>
    `;
    lista.appendChild(item);
  });

  // Añadir la lista al contenedor
  elemento.appendChild(lista);
});
