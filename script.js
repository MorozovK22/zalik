document.getElementById('btn-more-products').addEventListener('click', function() {
    window.location.href = 'page/category/index.html';
});

// Fade-in animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 300); // delay for staggered effect
    });
});

// Open and close modal logic
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');

contactBtn.addEventListener('click', () => {
    contactModal.classList.add('show');
});

closeContactModal.addEventListener('click', () => {
    contactModal.classList.remove('show');
});

document.addEventListener('click', (e) => {
    if (e.target === contactModal) {
        contactModal.classList.remove('show');
    }
});

// Copy to clipboard logic
document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetSelector = button.getAttribute('data-copy');
        const targetText = document.querySelector(targetSelector).textContent;
        navigator.clipboard.writeText(targetText).then(() => {
            alert('Copied to clipboard: ' + targetText);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });
});