
//Delegación de eventos y prevención de comportamiento predeterminado

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
event.target.closest("li").classList.toggle("highlight");
});
/*
const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.target.classList.toggle("highlight");
  });
});
*/

//clase manejo de entradas de formularios y validaciones
/*

const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
event.preventDefault();
const name = form.elements['name'];
console.log(name);
});

*/

// obtener hijos
// const parent = document.getElementById("parent");
// //console.log(parent);

// const children =parent.children;
// //console.log(children);

// const firstChild =parent.firstElementChild;
// console.log(firstChild);

// obtener padre
// const children2 = document.querySelector("li")
// console.log(children2);

// const parent2 = children2.parentNode;
// console.log(parent2);

// const grandParent = children2.parentElement;
// console.log(grandParent);

// const grandGrandParent = children2.parentElement.closest("menu");// es el más utilizado
// console.log(grandGrandParent);

// const title = document.querySelector("#app-title")
// undefined
// tite
// VM1589:1 Uncaught ReferenceError: tite is not defined
//     at <anonymous>:1:1
// (anónimo) @ VM1589:1
// title
// <h1 id=​"app-title">​Soy el header de esta app​</h1>​
// console.dir(title)
// undefined
// title.textContent="Nuevo texto"
// 'Nuevo texto'
// title
// <h1 id=​"app-title">​Nuevo texto​</h1>​

// document

// Trae un solo elemento
// document.getElementById('app-id')
// document.querySelector('#app-title')
// document.querySelector('p')

// Trae todos los elementos
// document.getElementsByClassName('menu-items')
// document.getElementsByTagName('p')
// document.querySelectorAll('.menu-items')

// GetElement hace que las transacciones sean mas rapidas
// -->
// title.innerText
// 'Nuevo texto'

/*Modificación de estilos en html*/

//modificar el atributo style: tener en cuenta que por jerarquia esto sobre escribira cualquier otra regla en el css pues es agregar un estilo en linea dentro del html

//modificar el atributo className, para que se le aplique otro set de reglas previamente definido en el css con ese nuevo nombre de clase.

//menubar.className = "main-menu";

//addEventListener: Evento para ejecución de una acción; en este caso al hacer click en un botón se ocuta o no una información
//  button.addEventListener("click", ()=>{
//    menu.classList.toggle("invisible");
//  };

/*Insertar elementos a una lista

--innerHTML reemplaza todo el contenido de un elemento.
--insertAdjacentHTML permite agregar contenido HTML en posiciones específicas alrededor de un elemento sin reemplazar su contenido existente.

Obtenemos el elemento del DOM con el id "contentArea" y lo almacenamos en la variable 'contentArea'
const contentArea = document.getElementById("contentArea");

Usamos 'innerHTML' para reemplazar todo el contenido del elemento 'contentArea' con un nuevo párrafo
contentArea.innerHTML = `<p>este es un nuevo parrafo realizado desde js - innerHTML</p>`;

Insertamos un nuevo párrafo al final del contenido actual de 'contentArea' usando 'insertAdjacentHTML' con "beforeend"
"beforeend" inserta el contenido justo antes del cierre del elemento, es decir, al final del elemento
contentArea.insertAdjacentHTML("beforeend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforeend</p>`);

"beforebegin" inserta el contenido antes de que comience el elemento, es decir, fuera del elemento y justo antes de él (miralo el html desde el navegador, estara fuera de section)
contentArea.insertAdjacentHTML("beforebegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - beforebegin</p>`);

"afterend" inserta el contenido después del cierre del elemento, es decir, fuera del elemento y justo después de él
contentArea.insertAdjacentHTML("afterend", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterend</p>`);


"afterbegin" inserta el contenido justo después de que comience el elemento, es decir, al inicio del elemento
contentArea.insertAdjacentHTML("afterbegin", `<p>este es un nuevo parrafo realizado desde js - insertAdjacentHTML - afterbegin</p>`);

const listArea = document.getElementById(`listArea`);
listArea.innerHTML += `<li>Item 5 - js innerHTML</li>`; //**agregando un nuevo elemento a la lista. 



listArea.insertAdjacentHTML(`beforeend`, `<li>Item 6 - js insertAdjacentHTML</li>`);//Este método únicamente renderiza el nuevo elemento que se agrega al documento 
*/

/*********createElement: Crea un nuevo elemento HTML.******************
Pasos:

1-Crear el elemento.
2-Rellenar el elemento.
3-Inyectar el elemento.

La inyección se puede realizar con 4 métodos diferentes:

Before: Convierte el elemento en el hermano del elemento referenciado (Pero ANTES).
After: Convierte al elemento en el hermano del elemento referenciado (Pero DESPUÉS).
Prepend: Lo agrega como hijo (Pero al inicio).
Append: Lo agrega como hijo al final.

--Ejemplo--
const newElement = document.createElement('p');
newElement.textContent = 'Texto del nuevo párrafo';
document.getElementById('content-area').appendChild(newElement);

*/

/*
remover elementos
list.removeChild(list.firstElementChild); //remueve el primer elemento de la lista.
list.removeChild(list.children[2]); //remueve el tercer elemento de la lista, [ ] número de la posición o index del elemento que queremos eliminar.
*/

/*
clonar nodos
cloneNode(true)

const contentArea = document.querySelector("#contentArea");
const originalP = contentArea.querySelector("p");
const clonedP = originalP.clonedP(true);

Reemplazar elementos del nodo
replaceWith()
*/
/*event object
const button =document.querySelector("button");

const buttonClicked = (event) =>{
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.textContent);
}

button.addEventListener("click", buttonClicked);*/
