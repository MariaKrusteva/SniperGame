function Sniper(possition, width, height, image, ctx){
  Base.call(this, possition, width, height, image, ctx, 8);
};

Sniper.prototype = Object.create(Base.prototype);
Sniper.prototype.constructor = Sniper;

Sniper.prototype.fireRocket = function(endPoint) {

  rocket = new Rocket(this.possition, 26, 49, 'img/rocket.png', this.ctx);
  rocket.moveTo(endPoint, this);
  rocket.explode(this);

}
