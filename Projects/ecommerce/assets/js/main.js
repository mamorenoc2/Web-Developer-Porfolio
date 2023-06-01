/*=============== SHOW MENU ===============*/


/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
cartShop = document.getElementById('cart-shop'),
cartClose = document.getElementById('cart-close')
if(cartShop) {
    cartShop.addEventListener("click", () => {
        cart.classList.add('show-cart')
    })
}

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartClose) {
    cartClose.addEventListener("click", () => {
        cart.classList.remove('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */


/*=============== SHOW LOGIN ===============*/

const login = document.getElementById('login'),
loginToogle = document.getElementById('loggin-toggle'),
loginClose = document.getElementById('login-close')
if(loginToogle) {
    loginToogle.addEventListener("click", () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginClose) {
    loginClose.addEventListener("click", () => {
        login.classList.remove('show-login')
    })
}


/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */


/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    //When the scroll is greater tha 50 viewport height add the scroll-header to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

// /*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
});


/*=============== SHOW SCROLL UP ===============*/ 

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListyener('scroll', scrollUp)
/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION ===============*/


/*=============== STYLE SWITCHER ===============*/