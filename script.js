// active navbar
let nav = document.querySelector(".wraper");
let navAdditional = document.querySelector(".wraperAddition");
let navActive = document.querySelector(".navigationActive");
let maps = document.querySelector(".mapLocation");

window.onscroll = function () {
    if(document.documentElement.scrollTop > 200){
        maps.classList.add("mapActive");
        setTimeout(function(){
            maps.classList.add("mapBorder");
        },5000);
    }
    if(document.documentElement.scrollTop > 50){
        navActive.classList.add("navigationActiveAdditional");
    }else{
        navActive.classList.remove("navigationActiveAdditional");
    };
    
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("scrollOn");
    }else{
        nav.classList.remove("scrollOn");
    };

    if(document.documentElement.scrollTop > 50){
        navAdditional.classList.add("scrollOnAdditional");
    }else{
        navAdditional.classList.remove("scrollOnAdditional");
    };


}

// Menu drawer



// 
// TESTIMONIALS
const testimonials = document.querySelector('.testimonials');
const testimonialItems = testimonials.querySelectorAll('.testimonial');
let index = 0;

function showNextTestimonial() {
  // Hide the current testimonial
  testimonialItems[index].classList.remove('active');
  // Increment the index
  index++;
  // If the index is greater than the number of testimonials, start over at 0
  if (index >= testimonialItems.length) {
    index = 0;
  }
  // Show the next testimonial
  testimonialItems[index].classList.add('active');
}

// Show the first testimonial
testimonialItems[index].classList.add('active');
// Set an interval to show the next testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);


// ===============================
// MENU SECTION
// ===============================
let tab1 = document.querySelector('#tab-1');
let tab2 = document.querySelector('#tab-2');
let tab3 = document.querySelector('#tab-3');

tab1.addEventListener('click', showTab);
tab2.addEventListener('click', showTab);
tab3.addEventListener('click', showTab);


let divis = document.querySelectorAll('.divi');
let buttons = document.querySelectorAll('.buttons');
let menuCon = document.querySelector("#menuCon").innerHTML;

function showTab(event){
    // alert(event.target.id);
    let id = event.target.id;
    id = id.slice(4,5)
    
    divis.forEach(function(element){
        element.classList.remove('active');
    });
    document.querySelector('#div-' + id).classList.add('active');
    buttons.forEach(function(element){
        element.removeAttribute('disabled', '');

    });
    document.querySelector('#tab-' + id).setAttribute('disabled', '');
    // document.querySelector('#tab-' + id).classList.add('menuAdd');

}