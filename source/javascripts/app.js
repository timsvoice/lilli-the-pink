function resizesplash() {
      var heights = window.innerHeight;
      document.getElementById("splash").style.height = heights -68 + "px";
  }

  resizesplash();
  window.onresize = function() {
      resizesplash();
};