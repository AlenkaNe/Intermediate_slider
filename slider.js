let images = [{
    src: "images/phon-2.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    src: "images/phon-2-slider(1).jpg",
    title: "Sochi Thieves"
  }, {
    src: "images/phon-2-slider(2).jpg",
    title: "Rostov-on-Don Patriotic"
  }, 
];
function initSlider() {
    if(!images || !images.length) return; //если images нет или пуст, то выходим из функции

    let sliderImages = document.querySelector(".slider__images");
    let sliderArrows = document.querySelector(".slider__arrows");

    initImages();
    initArrows();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<div class="image n${index} ${index === 0? "active": ""}" style = "background-image: url(${images[index].src});"></div>`;
            sliderImages.innerHTML += imageDiv;
        });
    }
}
document.addEventListener("DOMContentLoaded", initSlider);