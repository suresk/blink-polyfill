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
