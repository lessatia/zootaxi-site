// //Slider
// new Swiper('.hero__slider', {
//     slidesPerViev: 2,
//     loop: true,
//     spaceBetween: 10,
//     navigation: {
//         nextEl: '.hero__slider-btn_next',
//         prevEl: '.hero__slider-btn_prev',
//     },
//     autoplay: {
//         delay: 2500,
//     },
//     breakpoints: {
//         320: {
//             slidesPerViev: 1,
//         },
//         560: {spaceBetween: 8,}
//
//     }
// });
// //Calc
// const calcForm = document.querySelector('.js-calc-form');
// const totalSquare = document.querySelector('.js-square');
// const totalPrice = document.querySelector('.js-total-price');
// const calcResultWrapper = document.querySelector('.calc__result-wrapper');
// const btnSubmit = document.querySelector('.js-submit');
// const tariff = {
//     economy: 10,
//     comfort: 20,
//     premium: 30,
// };
window.onload = function() {
    let navLink = document.getElementsByClassName("nav__item");
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function ()
        {for (let j = 0; j < navLink.length; j++) {
            navLink[j].classList.remove("active");
        }
            this.classList.add("active");
            console.log(navLink)
        });
    }
}