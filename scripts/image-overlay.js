
let overlay = document.getElementById("image-overlay");

function showOverlay(fullResolutionImagePath) {

  // Disable overlay for small screen sizes
  // Set the overlay image source
  if(matchMedia("(min-width: 450px)").matches){
    document.getElementById("image-overlay-img").src = fullResolutionImagePath;
    overlay.classList.toggle("active");
    overlay.onclick = hideOverlay;
    overlay.style.cursor = "pointer";
  }
}
  
function hideOverlay() {
    
  overlay.classList.toggle("active");
  overlay.onclick = function(){};
  overlay.style.cursor = "auto";

  overlay.addEventListener("transitionend", () => {
    document.getElementById("image-overlay-img").src = "";
  }, { once: true} );
}