const slider = document.getElementById('scrollWrapper');
let scrollSpeed = 2;
let isPaused = false;
function startAutoScroll() {
    if (!isPaused) {
        slider.scrollLeft += scrollSpeed;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
        }
    }
}
let scrollInterval = setInterval(startAutoScroll, 30);
slider.addEventListener('mouseenter',() => {
    isPaused = true;
});
slider.addEventListener('mouseleave',() => {
    isPaused = false;
});
document.getElementById('categories-list').addEventListener("click",function(){
    let categorySection = document.getElementById('categories-section');
    if (categorySection.style.display === "none" || categorySection.style.display === "") {
        categorySection.style.display = "block";
    } else {
        categorySection.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".nav1 a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' class from all links
            navLinks.forEach(l => l.classList.remove("active"));

            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });

    // Set "Home" as active by default
    document.getElementById("home").classList.add("active");
});

const carousal = document.querySelector(".scroll-wrapper");
const images = document.querySelectorAll(".scroll-item");
let index = 0;
const totalImages = images.length;

function nextSlide() {
    index++;
    if (index >= totalImages) {
        index = 0;
    }
    updateCarousal();
}
function updateCarousal() {
    carousal.style.transform = 'translateX(-${index * 100}%)';
}
setInterval(nextSlide, 3000);

document.getElementById("category-head").addEventListener("click", function(event) {
    event.preventDefault();
    let dropdown = document.getElementById("category-head");
    dropdown.classList.toggle("show");
});

// Close dropdown when clicking outside
window.addEventListener("click", function(event) {
    if (!event.target.matches("#category-head")) {
        document.getElementById("category-head").classList.remove("show");
    }
});
