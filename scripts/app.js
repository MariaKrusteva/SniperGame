/*global require, $*/
'use strict';

requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery'
  }
});

require(['jquery', 'point', 'base', 'sniper'], function($, Point, Base, Sniper) {
  $(document).ready(function() {
    var
      canvas = $('#canvas')[0],
      context = canvas.getContext('2d'),
      height = 950,
      width = 950;
    canvas.height = height;
    canvas.width = width;

    var startP = new Point(100, 100);

    var sniper = new Sniper(startP, 53, 63,'img/sniper.png', context);
    sniper.initDraw();


    $('#canvas').on('click', function(event){
      var endPoint = new Point(event.pageX, event.pageY);
      sniper.fireRocket(endPoint);
    });

    $('#canvas').on('contextmenu', function(event){
      event.preventDefault();
      var endPoint = new Point(event.pageX, event.pageY);
      sniper.moveTo(endPoint);

    });
  });
});
