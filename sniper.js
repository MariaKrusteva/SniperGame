function Sniper(possition, image, ctx) {
  this.getPossition = function() {
    return possition;
  }

  this.getImage = function() {
    return image;
  }

  this.getCtx = function() {
    return ctx;
  }
}

Sniper.prototype.draw = function() {
  var ctx = this.getCtx();
  var x = this.getPossition().getX();
  var y = this.getPossition().getY();

  var img = new Image();
  img.src = this.getImage();
  img.onload = function(){
    ctx.drawImage(img, 0, 0, 52, 63, x, y, 52, 63);
  };
};

Sniper.prototype.move = function(moveTo) {
  // body...
};

Sniper.prototype.fire = function(fireTo) {
  //new rocket
  //rocket.moveTo(fireTo)
}

