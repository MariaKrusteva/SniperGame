/*global define*/
'use strict';
define(
  ['point'],
  function(Point){

    function Base(possition, width, height, image, ctx, numberOfFrames) {
      this.possition = possition;
      this.width = width;
      this.height = height;
      this.image = image;
      this.ctx = ctx;
      this.numberOfFrames = numberOfFrames;

      this.frameIndex = 0;
      this.tickCount = 0;
      this.ticksPerFrame = 6;

    }

    Base.prototype.initDraw = function() {
      var
        ctx = this.ctx,
        x = this.possition.getX(),
        y = this.possition.getY(),
        h = this.height,
        w = this.width,
        img = new Image();

      ctx.clearRect(0, 0, 800, 800);
      img.src = this.image;

      img.onload = function(){
        ctx.drawImage(img, 0, 0, w, h, x, y, w, h);
      };
    };

    Base.prototype.draw = function() {

      var
        ctx = this.ctx,
        x = this.possition.getX(),
        y = this.possition.getY(),
        h = this.height,
        w = this.width,
        img = new Image(),
        that = this;

      ctx.clearRect(0, 0, 800, 800);
      img.src = this.image;

      this.tickCount += 1;

      if(this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if(this.frameIndex < this.numberOfFrames - 1) {
            this.frameIndex += 1;
        }
        else {
          this.frameIndex = 0;
        }
      }

      img.onload = function(){
        ctx.drawImage(img, that.frameIndex * w, 0, w, h, x, y, w, h);
      };

    };

    function nearValues(a, b) {
      return (
        parseInt(a) === parseInt(b) ||
        parseInt(a) - 1 === parseInt(b) ||
        parseInt(a) === parseInt(b)-1
        );
    }


    Base.prototype.moveTo = function(endPoint, sniper) {

      var
        that = this,
        speed = 4,
        x1 = that.possition.getX(),
        x2 = endPoint.getX(),
        y1 = that.possition.getY(),
        y2 = endPoint.getY(),
        dx = x2 - x1,
        dy = y2 - y1,
        distance = Math.sqrt(dx*dx + dy*dy),
        moves = distance/speed,
        xunits = dx/moves,
        yunits = dy/moves,
        newPossition = null;



      function loop() {
        var timer = setTimeout(function(){

          x1 = that.possition.getX();
          x2 = endPoint.getX();
          y1 = that.possition.getY();
          y2 = endPoint.getY();

          if (moves > 0 ) {
            moves--;
            newPossition = new Point(x1 + xunits, y1 + yunits);
            that.possition = newPossition;
          }
          if(sniper){
            sniper.initDraw();
          }
          that.draw();
          loop();
        }, 1000/60);


        if(nearValues(x1, x2) && nearValues(y1, y2)) {
          clearTimeout(timer);
        }
      }

      loop();

    };

    return Base;
  }
);
