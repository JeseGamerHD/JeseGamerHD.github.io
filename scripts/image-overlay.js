let overlay = document.getElementById("image-overlay");

/** Toggles on the image overlay and displays an image based on the fullResolutionImagePath.
 * @param {string} fullResolutionImagePath - The path to the image file.
*/
function showOverlay(fullResolutionImagePath) {

  // Disable overlay for small screen sizes
  // Set the overlay image source
  if(matchMedia("(min-width: 0px)").matches){
    document.getElementById("image-overlay-img").src = fullResolutionImagePath;
    overlay.classList.toggle("active");
    overlay.onclick = hideOverlay;
    overlay.style.cursor = "pointer";
  }
}

/** Toggles off the image overlay. */
function hideOverlay() {
    
  overlay.classList.toggle("active");
  overlay.onclick = function(){};
  overlay.style.cursor = "auto";

  overlay.addEventListener("transitionend", () => {
    document.getElementById("image-overlay-img").src = "";
  }, { once: true} );
}