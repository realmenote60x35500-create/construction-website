// HTML mein menu-open-button ID wala element dhoondo aur usko menuOpenButton naam
//  ke variable mein store kar do.
// Yani ab JavaScript is button ko pehchan sakti hai.
// document → HTML document mein search karo.
// querySelector("#menu-open-button") → HTML mein jis element ki ID menu-open-button hai, 
// usko select karo.
// menuOpenButton → Jo element select hua hai, usko is variable mein store kar do.


const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Menu Open Button ko sunte raho. Jaisay hi koi is par click kare,
//  uske baad diye gaye function ko chala do
// click hum chahte hain ke function sirf button click hone par chale.
// Jab button click ho, tab is function ke andar likha hua code execute karo.
// (parameters),=>arrow function,  {function kabody yani is ke andr chalne wala code}
menuOpenButton.addEventListener("click", () => {
    // toggle mobile menu visibiity
    // documnent.body matlab hai: HTML page ke andar jo <body> tag hai, usko access karna.
    // classlist matlab hai kisi HTML element ki CSS classes ko access karna.
    // toggle: Pehli baar click karo → Menu OPEN ho jayega.
// Dobara click karo → Menu CLOSE ho jayega.
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close buuton
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());

// initialize swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,//Iska matlab hai slider continuously chalta rahega.
    // cursor hand ban jaye ga
    grabCursor:true,   
spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',//Ye Swiper ko batata hai ke pagination dots HTML mein kahan show karne hain.
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',//arrows ko functionality de rha
    prevEl: '.swiper-button-prev',
  },

//   responsive break points
// slides per view
breakpoints: {
    0: {
        slidesPerView:1
    },
    768: {
        slidesPerView:2
    },
    1024: {
        slidesPerView:3
    }
}
});