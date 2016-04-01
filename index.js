(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(this, function () {
    return function(){
      var blinks = document.getElementsByTagName("blink");
      for(i = 0; i < blinks.length; i++) {
        (function(i){
          var blink = blinks[i];
          var interval = blink.getAttribute("data-interval") || 500;
          var displayStyle = window.getComputedStyle(blink, null).getPropertyValue("display") || blink.style.display || 'block';
          setInterval(function(){
            if(blink.style.display && blink.style.display == displayStyle) {
              blink.style.display = 'none';
            }
            else {
              blink.style.display = displayStyle;
            }
          }, interval);
        }(i));
      }
    };
}));
