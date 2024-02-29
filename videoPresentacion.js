const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
    rotateLock: true,
    rotateXMax: 15,
    rotateYMax: 15,
    shadow: true,
    shadowOffset: 30,
    shadowScale: 0.8,
    highlight: false,
    durationEnter: 600,
    activeOffset: 60
  });
  
  function handleButtonClick() {
    // Aquí puedes colocar el código que se ejecutará cuando se haga clic en el botón.
    // Puedes redirigir a PagPrinicipal.html usando window.location.href
    window.location.href = 'PagPrinicipal.html';
}
