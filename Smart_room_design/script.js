// ================================
//  Smooth Scrolling to Sections
// ================================
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// ================================
//  Hero Section - Background Slideshow
// ================================
const heroSection = document.querySelector(".hero");

const images = [
    "https://www.iiad.edu.in/wp-content/uploads/2022/09/image10-2.webp",
    "https://media.designcafe.com/wp-content/uploads/2022/06/30170044/a-happy-family-living-room-with-storage-partition-for-toys-and-showpieces.jpg",
    "https://www.nobroker.in/blog/wp-content/uploads/2023/04/luxury-bedroom-interior-design.webp",
    "https://cdn-iipcp.nitrocdn.com/XqhvoWFlqFMToAmsGXoVEXOtlTyMXTXQ/assets/images/optimized/rev-cb90a81/smartscalehousedesign.com/wp-content/uploads/2023/03/15x22-room-interior-smartscale-house-design-1.png"
];

let currentIndex = 0;

function changeBackground() {
    heroSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

// Change the background every 5 seconds
setInterval(changeBackground, 5000);
changeBackground(); // Set initial background

// ================================
//  Scroll Animation for Features
// ================================
function revealFeatures() {
    const features = document.querySelectorAll(".feature");
    features.forEach(feature => {
        const position = feature.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight * 0.85) {
            feature.classList.add("visible");
        }
    });
}

// Run the function on scroll
window.addEventListener("scroll", revealFeatures);
revealFeatures(); // Run once to check already visible features

// ================================
//  Mobile Menu Toggle (if needed)
// ================================
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
