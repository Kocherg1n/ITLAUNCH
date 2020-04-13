// ========== Слайдер "Создание сайтов" (мобильная версия)

const clientWidth = innerWidth;
const siteCreateCarousel = document.getElementById('site-create-carousel');


$(document).ready(function () {
  $('.site-create-carousel').slick({
    arrows: true
  })
});

clientWidth <= 480 ? siteCreateCarousel.classList.add('site-create-carousel') : siteCreateCarousel.classList.remove('site-create-carousel');


// ========== Слайдер "Продвижение сайтов" (мобильная версия)

const sitePromotionCarousel = document.getElementById('site-promotion-carousel');

$(document).ready(function () {
  $('.site-promotion-carousel').slick({
    arrows: true
  })
});

clientWidth <= 480 ? sitePromotionCarousel.classList.add('site-promotion-carousel') : siteCreateCarousel.classList.remove('site-promotion-carousel');



// ========== Слайдер "Проекты" (мобильная версия)

