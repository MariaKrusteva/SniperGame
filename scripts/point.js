/*global define*/
'use strict';

define(
  function(){
    function Point(x, y){

      this.getX = function() {
        return x;
      };

      this.getY = function() {
        return y;
      };
    }

    return Point;
  }
);

