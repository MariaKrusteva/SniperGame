function Sniper(possition, width, height, image, ctx) {
  //TODO->sniper&rocket->same functionality

  this.possition = possition;

  this.getPossition = function() {
    return this.possition;
  }

  this.getImage = function() {
    return image;
  }

  this.getCtx = function() {
    return ctx;
  }

  this.getWidth = function() {
    return width;
  }

  this.getHeight = function() {
    return height;
  }

  this.setPossition = function(newPossition) {
    this.possition = newPossition;
  }

}

Sniper.prototype.draw = function() {
  var ctx = this.getCtx();
  ctx.clearRect(0, 0, 800, 800);
  var x = this.getPossition().getX();
  var y = this.getPossition().getY();
  var h = this.getHeight();
  var w = this.getWidth();

  var img = new Image();
  img.src = this.getImage();
  img.onload = function(){
    ctx.drawImage(img, 0, 0, w, h, x, y, w, h);
  };
};

Sniper.prototype.moveTo = function(endPoint) {

  var that = this;

  var speed = 4;
  var dx = endPoint.getX() - that.getPossition().getX();
  var dy = endPoint.getY() - that.getPossition().getY();
  var distance = Math.sqrt(dx*dx + dy*dy);
  var moves = distance/speed;
  var xunits = dx/moves;
  var yunits = dy/moves;



  function loop() {
    var timer = setTimeout(function(){

      if (moves > 0 ) {
              moves--;
              newPossition = new Point(that.getPossition().getX() + xunits, that.getPossition().getY()+yunits)
              that.setPossition(newPossition);
              console.log(endPoint.getX(), parseInt(that.getPossition().getX()) , endPoint.getY(), parseInt(that.getPossition().getY()))
           }
      that.draw();
      loop();


    }, 1000/60)

    if(endPoint.getX() === parseInt(that.getPossition().getX()) && endPoint.getY() === parseInt(that.getPossition().getY())){
      clearTimeout(timer);
    }
  }

  loop();

};

Sniper.prototype.fire = function(fireTo) {
  //new rocket
  //rocket.moveTo(fireTo)
}

