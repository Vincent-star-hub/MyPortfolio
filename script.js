const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
}

var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("white-theme");
    if(document.body.classList.contains("white-theme")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    }
}