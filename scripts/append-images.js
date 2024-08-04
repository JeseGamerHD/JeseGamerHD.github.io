// txt file generated offline since github pages dont support dynamic stuff
// it contains all the screenshot names which are used to append the screenshots to the gallery
fetch("images.txt")
.then(response => response.text())
.then(data => {
    const images = data.split("\n");
    images.forEach(appendImages);
    initializeLazyLoading(); // After adding all the images, apply lazy loading      
});

function appendImages(imageName) {
    
    let img = document.createElement("img");
    img.classList.add("screenshot");
    img.setAttribute("data-src", "images/screenshots/thumbnails/" + imageName);
    img.width = 600;
    img.height = 338;
    img.onclick = function() { showOverlay("images/screenshots/" + imageName) };

    document.getElementById("galleryContainer").appendChild(img);
}

function initializeLazyLoading() {
    
    const targets = document.querySelectorAll(".screenshot");

    const lazyLoad = target => {
      const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            console.log("e");
            
            if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            img.setAttribute('src', src);
            img.classList.add('fade');
            observer.disconnect();
          }
        });
      });
    
      io.observe(target)
    };
    
    targets.forEach(lazyLoad);
}
