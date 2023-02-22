// active navbar
let nav = document.querySelector(".wraper");
let maps = document.querySelector(".mapLocation");
let locationKingdom = document.querySelector(".locationKingdom");
let locationBurger = document.querySelector(".locationBurger");

window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("scrollOn");
    }else{
        nav.classList.remove("scrollOn");
    };

    if(document.documentElement.scrollTop > 200){
        maps.classList.add("mapActive");
        setTimeout(function(){
            maps.classList.add("mapBorder");
            locationBurger.style.display = "grid"
        },5000);
        setTimeout(function(){
            locationKingdom.style.display = "grid"
        },6000)
    }
}


// 