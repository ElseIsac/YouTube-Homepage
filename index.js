var menu = document.querySelector(".menu");
var sidebar123 = document.querySelector(".sidebar-123");
var sidebar = document.querySelector(".sidebar");

menu.onclick = function () {
    sidebar123.classList.toggle("small-sidebar123");
    sidebar.classList.toggle("small-sidebar");
}