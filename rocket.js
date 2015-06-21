function Rocket(possition, image) {
  this.getPossition = function() {
    return possition;
  }

  this.getImage = function() {
    return image;
  }
}

Rocket.prototype.move = function(moveTo) {
  // body...
};

Rocket.prototype.explode = function() {

};
