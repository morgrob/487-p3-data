var $lastPosition = 0;
window.onscroll = function() {
  var $position = window.pageYOffset;
  
  if ($position > $lastPosition) {
    document.getElementById("header").className = "hidden";
  } else if ($lastPosition - $position > 20) {
    document.getElementById("header").className = "active";
  }
  
  $lastPosition = $position;
};