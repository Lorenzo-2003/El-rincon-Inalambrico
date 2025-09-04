// Array con las rutas de las imágenes que se mostrarán en el carrusel

const images = [
  'img/Cartas.jpg',
  'img/Naruto.jpg',
  'img/consolas.png'
];

// Índice que indica cuál imagen está en el centro del carrusel
let center = 1;


// Función que actualiza las imágenes del carrusel según el índice 'center'

function updateCarousel() {
  document.getElementById('left-img').src = images[(center - 1 + images.length) % images.length];
  document.getElementById('center-img').src = images[center];
  document.getElementById('right-img').src = images[(center + 1) % images.length];
}


// Cuando la página termina de cargar, se asignan los eventos a las flechas y se actualiza el carrusel
  // Al hacer clic en la flecha izquierda, se mueve el carrusel hacia la izquierda

window.onload = function() {
  document.getElementById('left-arrow').onclick = function() {
    center = (center - 1 + images.length) % images.length;// retrocede el índice
    updateCarousel();// actualiza las imágenes
  };
  document.getElementById('right-arrow').onclick = function() {
    center = (center + 1) % images.length;
    updateCarousel();
  };
  updateCarousel();
};