/*===========SHOW MENU ======================*/

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ===============MENU SHOw=========== */
if (navToggle) {
  navToggle.addEventListenter("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ============MENU HIDDEN =================== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show - menu");
  });
}
