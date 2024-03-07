function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.opacity = "1"; // Asegura que el sidebar sea visible al abrir
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    setTimeout(function() { document.getElementById("mySidenav").style.opacity = "0"; }, 500); // Espera a que se complete la transición de ancho antes de ocultar
}

