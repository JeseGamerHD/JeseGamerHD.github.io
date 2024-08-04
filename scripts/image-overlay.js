

function showOverlay(fullResolutionImagePath) {

  // Disable overlay for small screen sizes
  if (matchMedia("(min-width: 0px)").matches) {
    // Set the overlay image source
    document.getElementById("image-overlay-img").src = fullResolutionImagePath;
    document.getElementById("image-overlay").classList.toggle("active");
  }
}
  
function hideOverlay() {
    
  document.getElementById("image-overlay").classList.toggle("active");

  // The old image that was previously viewed in full is removed here
  // The new image might take some time to load, but its better than displaying the wrong image for a brief moment
  // const overlay = document.getElementById("image-overlay");
  // if (!overlay.classList.contains("active")) {
  //   overlay.addEventListener("transitionend", function removeImage() {
  //     overlay.removeEventListener("transitionend", removeImage);
  //     console.log("e");
  //     document.getElementById("image-overlay-img").src = "";
  //   });
  // }
}