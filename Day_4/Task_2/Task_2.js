// ======================= Task_2 =======================

var imgs = document.getElementsByClassName("image");
var altText = document.getElementById("altText");
var imgIndex = 0;

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

showImage(imgIndex);
