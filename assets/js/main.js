const menuProjetos = document.querySelector(".menu-title");
const submenu = document.querySelector(".submenu");

if (menuProjetos) {
  menuProjetos.addEventListener("click", () => {
    submenu.classList.toggle("active");
  });
}
