import { componentes, error, help } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {

  // Elementos de la consola
  const input = document.getElementById("input-consola");
  const error_elemento = document.getElementById(error);
  let componente = null;

  // Comandos disponibles, incluyendo help y error
  const comandos_disponibles = [
    help,
    ...componentes,
  ];

  // Manejo del input de la consola
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const comando = input.value.trim();
      input.value = "";
      Comando(comando);
    }
    // Manejo del autocompletado al presionar Tab
    if (event.key === "Tab") {
      event.preventDefault(); 
    
      const comando = input.value.trim();
      Tab(comando);
    }
  });

  function Comando(name) {

    // Ocultar todos los componentes, incluido el error
    comandos_disponibles.forEach((c) => {
      const elemento = document.getElementById(c.id);
      if (elemento) elemento.classList.add("hidden");
    });
    if (error_elemento) error_elemento.classList.add("hidden");

    // Busca el componente solicitado en la lista de componentes
    componente = comandos_disponibles.find((c) => name.toLowerCase().trim() === c.name.toLowerCase().trim());

    // Si no se encuentra el componente, mostrar un error
    if (!componente) {
      if (error_elemento) error_elemento.classList.remove("hidden");
      return;
    }

    // Mostrar el componente solicitado
    const elemento = document.getElementById(componente.id);
    if (elemento) elemento.classList.remove("hidden");

  }

  function Tab(name){
    const coincidencia = comandos_disponibles.find((comando) =>
      comando.name.toLowerCase().startsWith(name.toLowerCase())
    );

    // Si hay coincidencias, autocompletar
    if (coincidencia) {  
      input.value = coincidencia.name;
      // Quitamos la parte que ya ha escrito el usuario y añadimos el resto
      // input.value = name + coincidencia.name.substring(name.length);    // <-- No modifica lo que ya ha escrito el usuario
    }
  }

  // Función para establecer el foco en el input
  function mantenerFoco() {
    if (document.activeElement !== input) {
      input.focus();
    }
  }
  // Escuchar eventos para mantener el foco
  document.addEventListener("keydown", mantenerFoco);
});
