/*---------------show/close navMenu--------------*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/*---------------Close navMenu when scroll--------------*/
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        let later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

let scrollPos = 0;
const nav = document.querySelector('.nav-menu');

function checkPosition() {
    let windowY = window.scrollY;
    if (windowY != scrollPos) {
        // Scrolling UP
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }

    scrollPos = windowY;
}


window.addEventListener('scroll', debounce(checkPosition));

/*---------------Image change-------------*/
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

function myFunction(x) {
    if (x.matches) {
        img1.src = "./images/mobile/image-gallery-milkbottles.jpg"
        img2.src = "./images/mobile/image-gallery-orange.jpg"
        img3.src = "./images/mobile/image-gallery-cone.jpg"
        img4.src = "./images/mobile/image-gallery-sugar-cubes.jpg"
    }
}

var x = window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)