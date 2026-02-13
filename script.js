// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section's ID
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // After scrolling, manually set the active class
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Gallery Modal Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const captionText = document.getElementById('caption');
const closeButton = document.querySelector('.close-button');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'flex'; // Use flex to center the content
        modalImage.src = item.dataset.full; // Get full image URL from data-full attribute
        captionText.innerHTML = item.alt; // Use alt text as caption
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
        modal.style.display = 'none';
    }
});

// --- ENHANCED SCRIPTS ---

// Scroll Indicator
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
};

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    // Find the section currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Apply active class to corresponding nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// Section Entrance Animations using Intersection Observer (NEW)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        } else {
            // Optional: Remove 'is-visible' if you want sections to re-animate on scroll back up
            // entry.target.classList.remove('is-visible');
        }
    });
}, { threshold: 0.2 }); // Trigger when 20% of the section is visible

sections.forEach(section => {
    observer.observe(section);
});


// Optional: Header text fade on scroll (NEW)
const headerContent = document.querySelector('header .container'); // Select the container with h1, p, button

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;

    // Calculate opacity based on scroll position
    // Fades out completely when scrolled about 50% of header height
    const opacity = 1 - (scrollPosition / (headerHeight * 0.5));
    headerContent.style.opacity = Math.max(0, opacity); // Ensure opacity doesn't go below 0
    headerContent.style.transform = `translateY(${scrollPosition * 0.2}px)`; // Subtle upward movement
});
