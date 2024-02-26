// JavaScript (AdmiraWebUJS.js)

// Función para alternar la visibilidad de la barra de navegación
function toggleNavbar() {
    var navbar = document.querySelector('nav ul');
    var toggleIcon = document.querySelector('.toggle-icon img');
    var logoContainer = document.querySelector('.logo');

    navbar.classList.toggle('active');
    toggleIcon.classList.toggle('rotate-icon');

    // Mueve la imagen del logo con la barra de navegación
    logoContainer.style.marginRight = navbar.classList.contains('active') ? '15%' : '20px';
}

// Función para manejar el final del video de presentación
function onVideoEnd() {
    // Oculta el video de presentación
    var videoPresentation = document.querySelector('.video-presentation');
    videoPresentation.style.display = 'none';

    // Muestra y anima elementos del header
    var header = document.getElementById('mainHeader');
    header.classList.remove('hidden');
    fadeIn(header);

    // Mostrar título del header con animación
    var headerTitle = document.querySelector('.header-title');
    fadeIn(headerTitle);
}

// Agregamos un event listener para detectar cuándo termina el video
document.getElementById('introVideo').addEventListener('ended', onVideoEnd);

// Función para animar la aparición de elementos con opacidad
function fadeIn(element) {
    var op = 0.1; // Inicialmente muy transparente
    element.style.opacity = op;
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;
    }, 50);
}




 