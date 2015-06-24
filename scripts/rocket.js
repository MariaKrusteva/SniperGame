/*global define*/
'use strict';
define(
  ['base'],
  function(Base){


    function Rocket(possition, width, height, image, ctx){
      Base.call(this, possition, width, height, image, ctx, 4);
    }

    Rocket.prototype = Object.create(Base.prototype);
    Rocket.prototype.constructor = Rocket;

    return Rocket;
  }
);


