// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


var slideIndex = 1;
showSlides(slideIndex);

// Function to move to the previous or next slide
function moveSlide(n) {
  showSlides(slideIndex += n);
}

// Function to control the current slide and reset when it reaches the end
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-slide");
  
  // If the slide number is greater than the total, reset to 1
  if (n > slides.length) { slideIndex = 1 }
  
  // If the slide number is less than 1, set to the total number of slides
  if (n < 1) { slideIndex = slides.length }
  
  // Initially set all slides to not be displayed
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  // Display the current slide
  slides[slideIndex-1].style.display = "block";  
}

// Optional: Automatically move to the next slide every 5 seconds
// setInterval(function(){ moveSlide(1); }, 5000);
