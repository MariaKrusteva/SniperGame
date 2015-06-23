function Rocket(possition, width, height, image, ctx){
  Base.call(this, possition, width, height, image, ctx, 4);
};

Rocket.prototype = Object.create(Base.prototype);
Rocket.prototype.constructor = Rocket;


Rocket.prototype.explode = function(sniper) {
  //TO DO
  //clear canvas
  //initDraw of sniper in the loop of
  //draw explosion
  this.ctx.clearRect(0, 0, 800, 800);
  // explosion = new Explosion(this.possition, 128, 128, 'img/explosion.png', this.ctx);
  // explosion.explode(this);



};
