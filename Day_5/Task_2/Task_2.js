/* ======================== Task_2 ======================== */
/* ====================== Slider ====================== */


var imgs = document.getElementsByClassName("image");
var altText = document.getElementById("altText");
var imgIndex = 0;
var slideInterval = null;

function showImage(index) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
        altText.innerHTML = `This is ${imgs[index].alt}`;
    }
    imgs[index].style.display = "block";
}

function nextImage() {
    imgIndex++;
    if (imgIndex >= imgs.length) {
        imgIndex = 0;
    }
    showImage(imgIndex);
}

function prevImage() {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgs.length - 1;
    }
    showImage(imgIndex);
}

function playImages() {
    if (slideInterval === null) {
        slideInterval = setInterval(nextImage, 1000);
    }
}

function stopImages() {
    clearInterval(slideInterval);
    slideInterval = null;
}

showImage(imgIndex);
