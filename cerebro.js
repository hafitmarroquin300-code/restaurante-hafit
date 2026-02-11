document.addEventListener('DOMContentLoaded', function () {

    initSlider();
    checkCookies();

    // Mostrar menú
const menuBtn = document.getElementById('menuBtn');
const menuSection = document.getElementById('menuSection');

if (menuBtn && menuSection) {
    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        menuSection.style.display =
            menuSection.style.display === 'block' ? 'none' : 'block';
        menuSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Dropdown MORE
const moreBtn = document.getElementById('moreBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

if (moreBtn && dropdownMenu) {
    moreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.style.display =
            dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(event) {
        if (!moreBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
}


});

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let current = 0;
    let interval;

    if (slides.length === 0) return;

    function showSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        dots.forEach(d => d.classList.remove('active-dot'));

        slides[index].classList.add('active');
        dots[index].classList.add('active-dot');

        current = index;
    }

    function nextSlide() {
        showSlide((current + 1) % slides.length);
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        });
    });

    interval = setInterval(nextSlide, 5000);
}

function hideCookies(choice) {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.style.display = 'none';
        localStorage.setItem('cookieChoice', choice);
    }
}

function checkCookies() {
    const saved = localStorage.getItem('cookieChoice');
    if (!saved) {
        document.getElementById('cookieBanner').style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const reservaBtn = document.getElementById("reservaBtn");

    if (reservaBtn) {
        reservaBtn.addEventListener("click", function(e) {
            e.preventDefault();

            const telefono = "593998773205"; // tu número
            const mensaje = "Hola, quiero hacer una reserva para una mesa.";

            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

            window.open(url, "_blank");
        });
    }

});

