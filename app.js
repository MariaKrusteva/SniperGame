$(document).ready(function() {
  var
    canvas = $('#canvas')[0],
    context = canvas.getContext('2d'),
    height = 800,
    width = 800;

  canvas.height = height;
  canvas.width = width;

  var startP = new Point(100, 100);

  var sniper = new Sniper(startP, 53, 63,'img/sniper.png', context);
  sniper.initDraw();


  $('#canvas').on('click', function(event){
    var endPoint = new Point(event.pageX, event.pageY);
    sniper.fireRocket(endPoint);
    });

  $('#canvas').on('contextmenu', function(event){
    event.preventDefault();
    var endPoint = new Point(event.pageX, event.pageY);
    sniper.moveTo(endPoint);

  })

  // var startP = new Point(100, 100);
  // var newP = new Point(200, 200);
  // var endP = new Point(400, 400);
  // var sniper = new Sniper(startP, 53, 63,'img/sniper.png', context)
  //var explosion = new Base(startP,128,128,'img/explosion.png', context, 40)
  //var rocket = new Rocket(newP, 26, 49, 'img/rocket.png', context)
  //sniper.initDraw();
  // rocket.initDraw();
  // explosion.initDraw();
  //sniper.setPossition(endP);
  //sniper.draw();

  //sniper.fireRocket(endP);
  //sniper.moveTo(endP);
  //rocket.moveTo(endP)
  //explosion.draw();
})
