// --- Book Loader Animation ---
const bookLoader = document.getElementById('book-loader');
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        bookLoader.style.opacity = 0;
        setTimeout(() => bookLoader.style.display = 'none', 700);
    }, 1800); // matches book animation duration
});
