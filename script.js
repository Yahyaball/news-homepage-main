const buttonMenu = document.getElementById("button-menu");
const buttonClose = document.getElementById("button-close");
const nav = document.getElementById("primary-navigation");
const overlay = document.getElementById("overlay");
const main = document.querySelector("main");
const logo = document.getElementById("logo");
const media = window.matchMedia("(max-width: 79.99rem)");
const tabletMedia = window.matchMedia("(min-width: 48rem)");
const heroImg = document.getElementById("hero-img");
const rootElement = document.documentElement;
let expanded = false;

function updateImage(e) {
  const isTablet = e.matches;
  if (isTablet) {
    heroImg.setAttribute("src", "assets/images/image-web-3-desktop.jpg");
  } else {
    heroImg.setAttribute("src", "assets/images/image-web-3-mobile.jpg");
  }
}

function updateNavbar(e) {
  const isMobile = e.matches;
  if (isMobile) {
    nav.setAttribute("inert", "");
  } else {
    nav.removeAttribute("inert");
    if (expanded) {
      collapseNav();
    }
  }
}

media.addEventListener("change", (e) => updateNavbar(e));
tabletMedia.addEventListener("change", (e) => updateImage(e));


function expandNav() {
  nav.classList.add("show");
  nav.removeAttribute("inert");
  main.setAttribute("inert", "");
  logo.setAttribute("inert", "");
  buttonMenu.setAttribute("inert", "");
  buttonClose.focus();
  expanded = true;
}

function collapseNav() {
  nav.classList.remove("show");
  nav.setAttribute("inert", "");
  main.removeAttribute("inert");
  logo.removeAttribute("inert");
  buttonMenu.removeAttribute("inert");
  buttonMenu.focus();
  expanded = false;
}

buttonMenu.addEventListener("click", () => {
  expandNav();
});

buttonClose.addEventListener("click", () => {
  collapseNav();
});

overlay.addEventListener("click", () => {
  collapseNav();
});

updateNavbar(media);
updateImage(tabletMedia);

rootElement.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && expanded) {
    collapseNav()
  }
}
)