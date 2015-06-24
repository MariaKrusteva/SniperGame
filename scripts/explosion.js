/*global define*/
'use strict';
define(
  ['base'],
  function(Base){

    function Explosion(possition, width, height, image, ctx){
      Base.call(this, possition, width, height, image, ctx, 40);
    }

    Explosion.prototype = Object.create(Base.prototype);
    Explosion.prototype.constructor = Explosion;

    Explosion.prototype.explode = function(sniper) {
      var
        that = this;

      function loop() {
        var timer = setTimeout(function(){
          that.draw();
          sniper.initDraw();
          loop();
        }, 1000/60);

        if(that.frameIndex === 40) {
          clearTimeout(timer);
        }
      }

      loop();
    };

    return Explosion;
  }
);
