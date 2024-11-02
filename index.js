let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Display the first image on load
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Move to the next or previous slide
function moveSlide(direction) {
  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Automatic slideshow
setInterval(() => {
  moveSlide(1);
}, 3000); // Change every 3 seconds

// Initialize the slider
showSlide(currentIndex);
