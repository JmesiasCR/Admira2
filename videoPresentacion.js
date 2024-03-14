document.addEventListener('DOMContentLoaded', (event) => {
    const myAtropos = Atropos({
        el: '.my-atropos',
        rotateLock: true,
        rotateXMax: 15,
        rotateYMax: 15,
        shadow: false,
        shadowOffset: 30,
        //shadowScale: 0.8,
        highlight: false,
        durationEnter: 600,
        activeOffset: 60
    });

    const button = document.querySelector('.center-button');
    const image = document.querySelector('.filtered-image'); // Selecciona la imagen
    const texts = document.querySelectorAll('.text-over'); // Selecciona todos los elementos text-over

    button.addEventListener('mouseenter', function() {
        image.style.filter = 'grayscale(0%)'; // Elimina el filtro de escala de grises
        texts.forEach(text => {
            text.style.animationPlayState = 'paused';
            text.style.color = 'transparent'; // Hace el texto transparente
        });
    });

    button.addEventListener('mouseleave', function() {
        image.style.filter = 'grayscale(100%)'; // Restablece el filtro de escala de grises
        texts.forEach(text => {
            text.style.animationPlayState = 'running';
            text.style.color = 'rgb(2, 137, 190)'; // Restaura el color original del texto
        });
    });

    // Asegúrate de que esta función esté accesible globalmente si se usa en el HTML
    window.handleButtonClick = function() {
        window.location.href = 'PagPrincipal.html'; // Modifica según la URL de destino
    }
    button.addEventListener('click', handleButtonClick); // Asegura la correcta asignación del evento de clic
});
