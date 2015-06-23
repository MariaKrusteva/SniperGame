function Explosion(possition, width, height, image, ctx){
  Base.call(this, possition, width, height, image, ctx, 40);
};

Explosion.prototype = Object.create(Base.prototype);
Explosion.prototype.constructor = Explosion;

Explosion.prototype.explode = function(sniper) {
  var that = this;
  function loop() {
    setTimeout(function(){
      that.draw();
      sniper.initDraw();
      loop();
    }, 1000/60);
  }

  loop();
}
