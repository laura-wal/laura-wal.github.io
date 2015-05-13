var swirl = (
  (function () {
    var canvas = document.getElementById("canvas");
    var w = canvas.width = window.innerWidth;
    var h = canvas.height = window.innerHeight;
    var centerX = w/2;
    var centerY = h/2;

    var ctx = canvas.getContext("2d");
    
    ctx.lineWidth = 15;
    var max = Math.max(w, h) * 1.2;
    var start = 0;
    var startIncrement = -0.2;
    function draw() {
      requestAnimationFrame(draw);
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      var t = start;
      for(var i = 0; i < max; ++i) {
        x = Math.cos(t) * i/2 + centerX;
        y = Math.sin(t) * i/2 + centerY;
        ctx.lineTo(x, y);
        t += 0.1;
      }
      ctx.stroke();
      start += startIncrement;
    }
    requestAnimationFrame(draw);
    
    function toggleDirection(){
      startIncrement *= -1;
    }
    
    canvas.addEventListener("click", toggleDirection, false);
  })();
);  