function openMenu() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("nav").style.display = "-webkit-box;";
    document.getElementById("nav").style.display = "-ms-flexbox;";
    document.getElementById("nav").style.display = "flex";
    document.getElementById("nav-list").classList.add("fade"); }
function closeMenu() {
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("nav-list").classList.remove("fade");}