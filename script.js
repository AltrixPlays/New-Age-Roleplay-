// Update current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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

// --- NEW SCRIPTS ---

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
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Adjust this value to change when a section becomes 'active'
        // For example, sectionTop - sectionHeight / 3 means it becomes active
        // when the top of the section is 1/3rd of the way up the viewport.
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active from all
        // Check if the link's href matches the current section's ID
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active'); // Add active to the current one
        }
    });
});
