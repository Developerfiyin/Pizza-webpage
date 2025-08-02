/*===========SHOW MENU ======================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ===============MENU SHOw=========== */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ============MENU HIDDEN =================== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//======REMOVE MENU MOBILE===========
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  //When we click on each nav-link, we remove the show-menu close
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

//==================ADD SHADOW HEADER===========

const shadowHeader = () => {
  const header = document.getElementById("header");
  // ADD A CLASS IF THE BOTTOM OFFSET IS GREATER THAN 50 OF THE VALUE
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

//CONST SWIPER POPLAR
const swiperPopular = new Swiper(".popular__swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
});

/*============SHOW SCROLL UP */
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
  //When the scroll is higher than 350 viewport height, add the
};
window.addEventListener("scroll", scrollUp);

/*SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY,
  
sections.forEach((current => {
  const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
  sectionsClass = document.querySelector(".nav__menu a[href*=" + sectio
};
);
  /* ===========PEKA*/
});

//document.getElementById("btn").onclick = function () {
//alert("Peka is 16 years old right now!");
//};

/*  TODAY I LEARNT IF AND ELSE STATEMENT */

var iLoveJs = true;
if (iLoveJs) {
  console.log("Good girl Keep it going ");
} else console.log("You dont have a choice, Go back to it");
//  WRITE A PROGRAM TO FIND THE FOLLOWING SCORES IN A TERTIARY INSTITUTION

//If a student got between  75- 100 print out >> FIRST CLASS UPPER
// IF A STUDENT GOT BETWEEN 65- 100 PRINT OUT >> SECOND CLASS UPPER
// IF A STUDENT GOT BRETWEEN 50 - 64 PRINT OUT >> SECOND CLASS LOWER
// IF A STUDENT GOT BETWEEN 41 - 49 PRINT OUT >> THIRD CLASS
// IF A STUDENT GOT BETWEEN 30 - 40 PRINT OUT >> PASS
// ELSE FAIL

//SOLUTION

var scores = 20; //where scores is a varaiable and the valueis an initialization
if (scores >= 75 && scores <= 100) {
  console.log("FIRST CLASS UPPER");
} else if (scores >= 65 && scores <= 100) {
  console.log("SECOND CLASS UPPER");
} else if (scores >= 50 && scores <= 64) {
  console.log("SECOND CLASS LOWER");
} else if (scores >= 41 && scores <= 49) {
  console.log("THIRD CLASS");
} else if (scores >= 30 && scores <= 40) {
  console.log("PASS");
} else {
  console.log("FAILED...ADVISED TO WITHDRAW NOW!");
}
/*else if (scores >= 1 && scores <= 29) {
  console.log("FAIL!");}
*/
