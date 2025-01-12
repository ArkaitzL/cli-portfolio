import { help } from "./data.js";

// Obtener todos los elementos con la clase 'help_txt'
let helpElements = document.getElementsByClassName('help_txt');

// Asignar el valor a cada uno de los elementos con la clase 'help_txt'
for (let i = 0; i < helpElements.length; i++) {
    helpElements[i].innerHTML = help.name;
}