document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    setTimeout(() => {
        header.classList.add('header-visible');
    }, 150);

    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
});