//const toggleMenuElement = document.getElementById('toggle-menu');
//const mainMenuElement = document.getElementById('main-menu');

//toggleMenuElement.addEventListener('click', ()=> {
 //mainMenuElement.classList.toggle('main-menu--show');

//});

// INICIO DE ANIMACIÃ“N 

   const scrollers = document.querySelectorAll(".scroller");

   // If a user hasn't opted in for recuded motion, then we add the animation
   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
     addAnimation();
   }
   
   function addAnimation() {
     scrollers.forEach((scroller) => {
       // add data-animated="true" to every `.scroller` on the page
       scroller.setAttribute("data-animated", true);
   
       // Make an array from the elements within `.scroller-inner`
       const scrollerInner = scroller.querySelector(".scroller__inner");
       const scrollerContent = Array.from(scrollerInner.children);
   
       // For each item in the array, clone it
       // add aria-hidden to it
       // add it into the `.scroller-inner`
       scrollerContent.forEach((item) => {
         const duplicatedItem = item.cloneNode(true);
         duplicatedItem.setAttribute("aria-hidden", true);
         scrollerInner.appendChild(duplicatedItem);
       });
     });
   };

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


// Función para mostrar el modal al cargar la página
window.onload = function() {
    showModal();
};

// Función para mostrar el modal
function showModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}