/*global Raphael */

Raphael.fn.experiment = function () {
  var paper = this,
      isOver = false,
      circles = [],
      ox = 490,
      oy = 200,
      stage;
  
  paper.safari();
  
  return {
    
    getRandomX: function () {
      return (isOver) ? ox : Math.floor(Math.random() * 980);
    },
    
    getRandomY: function () {
      return (isOver) ? oy : Math.floor(Math.random() * 400);
    },
    
    getRandomSpeed: function () {
      return Math.floor(Math.random() * 900) + 100;
    },
    
    initialize: function () {
      this.buildStage();
      this.createOrbs();
    },
    
    buildStage: function () {
      stage = paper.rect(0, 0, 980, 400).attr({fill: '#000', opacity: 0});
      
      stage.node.onmousemove = function (e) {
        ox = e.offsetX;
        oy = e.offsetY;
      };
      
      stage.node.onmouseover = function (e) {
        isOver = true;
      };
      
      stage.node.onmouseout = function (e) {
        isOver = false;
      };
    },
    
    createOrbs: function () {
      for (var i = 0; i < 200; i += 1) {
        var circ = paper.circle(490, 200, 2).attr({fill: '#FB6A25', stroke: 'none'});
        circles.push(circ);
        this.motion(circ);
      }
    },
    
    motion: function (c) {
      var that = this;
      c.animate({cx: this.getRandomX(), cy: this.getRandomY()}, this.getRandomSpeed(), '<>', function () {
        that.motion(this);
      });
    },
    
    dispose: function () {
      paper.clear();
      circles.length = 0;
    }
  
  };
  
};


(function (raphael) {

  var exp = raphael('experiment', 980, 400).experiment();
  exp.initialize();

}(Raphael));
