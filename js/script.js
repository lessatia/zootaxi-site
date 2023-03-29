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



//
//
// btnSubmit.addEventListener('input', (event) => {
//     if (calcForm.width.value > 0 && calcForm.length.value > 0) {
//         btnSubmit.disabled = false
//     } else {
//         btnSubmit.disabled = true
//     }
// });
//
//
// calcForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(calcForm.width.value);
//     console.log(calcForm.length.value);
//     console.log(calcForm.tariff.value);
//     if (calcForm.width.value > 0 && calcForm.length.value > 0) {
//         const square = calcForm.width.value * calcForm.length.value;
//         const price = square * tariff[calcForm.tariff.value];
//
//         calcResultWrapper.style.display = 'block';
//         totalSquare.textContent = `${square} кв м`;
//         totalPrice.textContent = `${price} руб`;
//     }
//
// })
