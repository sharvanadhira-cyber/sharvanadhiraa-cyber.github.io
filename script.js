document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    // Fungsi untuk membuka/menutup menu di tampilan HP
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('open');
    });

    // Menutup menu saat link diklik (Berguna di tampilan HP)
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('open')) {
                navMenu.classList.remove('open');
            }
        });
    });
});
