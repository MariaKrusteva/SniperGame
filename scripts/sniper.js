/*global define*/
'use strict';
define(
  ['base', 'rocket', 'explosion'],
  function(Base, Rocket, Explosion){

    function Sniper(possition, width, height, image, ctx){
      Base.call(this, possition, width, height, image, ctx, 8);
    }

    Sniper.prototype = Object.create(Base.prototype);
    Sniper.prototype.constructor = Sniper;

    Sniper.prototype.fireRocket = function(endPoint) {

      var rocket = new Rocket(this.possition, 26, 49, 'img/rocket.png', this.ctx);
      rocket.moveTo(endPoint, this);
      this.ctx.clearRect(0, 0, 800, 800);
      var explosion = new Explosion(endPoint, 128, 128, 'img/explosion.png', this.ctx);
      explosion.explode(this);

    };

    return Sniper;
  }
);
