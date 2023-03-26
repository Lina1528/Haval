/*Меню бургер*/ 

const iconMenu = document.querySelector('.menu-icon');
const menuLink = document.querySelectorAll('.menu-link');
const menuBody = document.querySelector('.menu-body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle("lock");
        iconMenu.classList.toggle("active");
        menuBody.classList.toggle("active");

        
    });
} 
/*Закрытие меню при клике на пункт меню*/
menuLink.forEach(element => { element.addEventListener('click', function() {
        if (menuBody.classList.contains("active")){
            document.body.classList.remove("lock");
            iconMenu.classList.remove("active");
            menuBody.classList.remove("active");
        };
    })
});

/*Главный экран слайдер*/
const swiper1 = new Swiper('.swiper.intro-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/*Слайдер Swiper с моделями машин*/
let swiper2 =new Swiper('.swiper.models-slider', {
    loop: true,
    thumbs: {
        swiper:{
            el: '.models-slide-titles',
            slidesPerView: 'auto',
        }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
