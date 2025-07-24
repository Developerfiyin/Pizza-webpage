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

/* ===========PEKA*/
document.getElementById("btn").onclick = function () {
  alert("Peka is 16 years old right now!");
};

/*  TODAY I LEARNT IF AND ELSE STATEMENT */

var iLoveJs = true;
if (iLoveJs) {
  console.log("Good girl Keep it going ");
} else console.log("You dont have a choice, Go back to it");
