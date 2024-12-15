// Simple scroll effect for navigation links
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href').replace("#", "#"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Settings Modal functionality
    const settingsIcon = document.getElementById('settings-icon');
    const modal = document.getElementById('settings-modal');
    const closeModal = document.querySelector('.close');
    const themeSwitch = document.getElementById('theme-switch');

    settingsIcon.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    themeSwitch.addEventListener('change', function () {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
    });

    // Initialize AOS
    AOS.init();
});

// For the contact form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Send data via Formspree (or your backend)
        const formData = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message! I will get back to you soon.');
                form.reset(); // Clear the form
            } else {
                alert('Something went wrong. Please try again later.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        });
    });
});