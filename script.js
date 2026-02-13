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