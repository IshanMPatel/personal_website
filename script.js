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
    const popup = document.querySelector('#message-popup'); // Popup element
    const popupOverlay = document.querySelector('.popup-overlay'); // Overlay element
    const popupMessage = document.querySelector('#popup-message'); // Message inside the popup
    const closePopupButton = document.querySelector('#close-popup'); // Close button

    // Close popup and enable scrolling
    closePopupButton.addEventListener('click', function () {
        popup.classList.add('hidden');
        popupOverlay.classList.add('hidden');
        document.body.classList.remove('popup-active'); // Allow scrolling again
    });

    // Handle form submission
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
                // Show success popup
                popupMessage.innerHTML = '<strong style="color: green;">✅<br>Message Sent!</strong><br>Thank you for your message.';
                popup.classList.remove('hidden');
                popupOverlay.classList.remove('hidden');
                document.body.classList.add('popup-active'); // Disable scrolling
                form.reset(); // Clear the form
            } else {
                // Show error popup
                popupMessage.innerHTML = '<strong style="color: red;">❌<br>Something went wrong!</strong><br>Please try again later.';
                popup.classList.remove('hidden');
                popupOverlay.classList.remove('hidden');
                document.body.classList.add('popup-active'); // Disable scrolling
            }
        }).catch(error => {
            console.error('Error:', error);
            // Show error popup
            popupMessage.innerHTML = '<strong style="color: red;">❌<br>An error occurred!</strong><br>Please try again.';
            popup.classList.remove('hidden');
            popupOverlay.classList.remove('hidden');
            document.body.classList.add('popup-active'); // Disable scrolling
        });
    });
});
