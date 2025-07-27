// Menu
const menuItems = document.querySelectorAll(".cabecalho-menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(el => el.classList.remove("active"));
        item.classList.add("active");
    });
});

// Sub Menu
const dropdown = document.querySelector(".casas-dropdown");
const toggle = dropdown.querySelector(".dropdown-toggle");

toggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("ativo");
});

document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("ativo");
    }
});

// Scroll do Cabeçalho 
window.addEventListener("scroll", function () {
  const header = document.querySelector(".cabecalho");
  if (window.scrollY > 50) {
    header.classList.add("cabecalho-scroll");
  } else {
    header.classList.remove("cabecalho-scroll");
  }
});

// Menu hambúrguer
const botaoHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".cabecalho-menu");

botaoHamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// Fecha o menu mobile ao clicar em um item
if (menu.classList.contains("ativo")) {
    menu.classList.remove("ativo");
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(el => el.classList.remove("active"));
        item.classList.add("active");

        // Fecha o menu mobile
        if (menu.classList.contains("ativo")) {
            menu.classList.remove("ativo");
        }
    });
});

