let songs = document.querySelectorAll('.music');
let image = document.querySelectorAll('.albumCover');

function hideAll() {
  songs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

image.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    switch (e.target.getAttribute('id')) {
          case 'upAllNight':
            document.querySelector('#wmyb')
            	.style.display = 'block';
            break;
          case 'takeMeHome':
            document.querySelector('#littleThings')
            	.style.display = 'block';
            break;
          case 'midnightMemories':
            document.querySelector('#bse')
            .style.display = 'block';
            break;
          case 'four':
            document.querySelector('#nightChanges')
            .style.display = 'block';
            break;
        }
let players = document.querySelectorAll('audio');
players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
        });
      }
  });
