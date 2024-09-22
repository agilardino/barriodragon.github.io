const menu1 = document.getElementById('chaufa');
const menu2 = document.getElementById('pato-asado');
const menu3 = document.getElementById('kamlu');
const menu4 = document.getElementById('chancho-asado');
const menu5 = document.getElementById('tallarin');
const maspintados = document.getElementById('maspintados');
const barriodragon = document.getElementById('barriodragon');
const visitabarrio = document.getElementById('visitabarrio');
const parrafo = document.getElementById('parrafo');
const losbravos = document.getElementById('losbravos');
const bravos = document.getElementById('bravos');

const cargarDiv = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }else {
            entrada.target.classList.remove('visible');
        }


    });
}

const observador = new IntersectionObserver(cargarDiv, {
    root: null,
    rootMargin: '0px 100px 0px 200px',
    threshold: 0.8,
});

observador.observe(menu1);
observador.observe(menu2);
observador.observe(menu3);
observador.observe(menu4);
observador.observe(menu5);
observador.observe(maspintados);
observador.observe(barriodragon);
observador.observe(visitabarrio);
observador.observe(parrafo);
observador.observe(losbravos);