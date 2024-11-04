let currentImage1 = 0;
let currentImage2 = 0;

const images1 = document.querySelectorAll('.servicios-container:nth-child(1) .imagen-cambia');
const images2 = document.querySelectorAll('.servicios-container:nth-child(2) .imagen-cambia');

setInterval(() => {
    images1[currentImage1].style.display = 'none'; 
    currentImage1 = (currentImage1 + 1) % images1.length; 
    images1[currentImage1].style.display = 'block'; 
}, 3000);

setInterval(() => {
    images2[currentImage2].style.display = 'none';
    currentImage2 = (currentImage2 + 1) % images2.length;
    images2[currentImage2].style.display = 'block';
}, 3000);
