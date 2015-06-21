$(document).ready(function() {
  var
    canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    height = 800,
    width = 800;

  // var img = new Image();
  // img.src = 'img/sniper.png'

  canvas.height = height;
  canvas.width = width;




  var startP = new Point(200, 200);
  var sniper = new Sniper(startP, 'img/sniper.png', context)
  sniper.draw();
})
