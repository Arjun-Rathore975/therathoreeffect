// Simple reveal on scroll
const reveal = () => {
    const threshold = window.innerHeight * 0.9;
    document.querySelectorAll('section').forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < threshold) sec.classList.add('visible');
    });
};
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);


