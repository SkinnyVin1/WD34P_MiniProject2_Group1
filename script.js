// active navbar
let nav = document.querySelector(".wraper");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("scrollOn");
    }else{
        nav.classList.remove("scrollOn");
    }
}

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

