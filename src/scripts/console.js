const components = [
    { id: "perfil", name: "Perfil" },
    { id: "help", name: "Help" },
    { id: "error", name: "Error" },
  ];
  
  const consoleInput = document.getElementById("console-input");
  const consoleOutput = document.getElementById("output");
  
  function showComponent(name) {
    const component = components.find((c) => c.name.toLowerCase() === name.toLowerCase());
    if (!component) {
      appendOutput(`Comando no reconocido: ${name}. Intenta con "Help".`);
      return;
    }
  
    // Ocultar todos los componentes
    components.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) element.classList.add("hidden");
    });
  
    // Mostrar el componente solicitado
    const selectedElement = document.getElementById(component.id);
    if (selectedElement) selectedElement.classList.remove("hidden");
    appendOutput(`Mostrando el componente: ${component.name}`);
  }
  
  function appendOutput(text) {
    const line = document.createElement("div");
    line.textContent = text;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }
  
  // Manejo del input de la consola
  consoleInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const command = consoleInput.value.trim();
      consoleInput.value = "";
      showComponent(command);
    }
  });