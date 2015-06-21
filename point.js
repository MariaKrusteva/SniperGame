function Point(x, y){

  this.getX = function() {
    return x;
  }

  this.getY = function() {
    return y;
  }

}

// Point.prototype.draw = function(size, ctx) {
//   ctx.fillRect(this.getX() * size, this.getY() * size, size, size);
// }

// Point.prototype.equivalent = function(point) {
//   return this.getX() === point.getX() && this.getY() === point.getY();
// }
