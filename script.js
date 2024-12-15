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
});

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
