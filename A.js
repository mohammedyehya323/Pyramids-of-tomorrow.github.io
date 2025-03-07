// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation Example
function validateForm(formId) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add validation logic here
        alert('Form submitted successfully!');
    });
}

// Lazy Loading for Images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    });
});