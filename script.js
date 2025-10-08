document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 50,
    });

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Typed.js for Hero Section
    new Typed('#typed-text', {
        strings: ['Problem Solver.', 'Team Player.', 'Lifelong Learner.', 'Software Engineer.'],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        backDelay: 2000,
    });
    
    // Add Scrolled Class to Header
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .header-brand a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Offset for sticky header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top Button functionality
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form submission and Popup logic
    const form = document.querySelector('.contact-form');
    const popup = document.querySelector('#message-popup');
    const popupOverlay = document.querySelector('.popup-overlay');
    const popupMessage = document.querySelector('#popup-message');
    const closePopupButton = document.querySelector('#close-popup');

    closePopupButton.addEventListener('click', function () {
        popup.classList.add('hidden');
        popupOverlay.classList.add('hidden');
        document.body.classList.remove('popup-active');
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                popupMessage.innerHTML = '<strong style="color: green;">✅<br>Message Sent!</strong><br>Thank you for your message.';
                form.reset();
            } else {
                popupMessage.innerHTML = '<strong style="color: red;">❌<br>Something went wrong!</strong><br>Please try again later.';
            }
            popup.classList.remove('hidden');
            popupOverlay.classList.remove('hidden');
            document.body.classList.add('popup-active');
        }).catch(error => {
            console.error('Error:', error);
            popupMessage.innerHTML = '<strong style="color: red;">❌<br>An error occurred!</strong><br>Please try again.';
            popup.classList.remove('hidden');
            popupOverlay.classList.remove('hidden');
            document.body.classList.add('popup-active');
        });
    });
});
