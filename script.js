// active navbar
let nav = document.querySelector(".wraper");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("scrollOn");
    }else{
        nav.classList.remove("scrollOn");
    }
}