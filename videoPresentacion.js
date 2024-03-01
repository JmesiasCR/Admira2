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
  window.location.href = 'PagPrinicipal.html';
}

document.querySelector('.center-button').addEventListener('mouseenter', function () {
    document.querySelector('.filtered-image').style.filter = 'grayscale(0%)';
});

document.querySelector('.center-button').addEventListener('mouseleave', function () {
    document.querySelector('.filtered-image').style.filter = 'grayscale(100%)';
});