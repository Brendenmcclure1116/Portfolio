console.log("Portfolio website loaded!");

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, a').forEach(elem => {
        elem.classList.toggle('dark-mode');
    });
});