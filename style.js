// Animated testimonial slider
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;
    function showTestimonial(idx) {
        testimonials.forEach((el, i) => {
            el.classList.toggle('active', i === idx);
        });
    }
    setInterval(() => {
        current = (current + 1) % testimonials.length;
        showTestimonial(current);
    }, 3500);

    // Animated title effect
    const title = document.querySelector('.animated-title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            title.style.letterSpacing = '8px';
            title.style.transition = 'letter-spacing 0.4s';
        });
        title.addEventListener('mouseleave', () => {
            title.style.letterSpacing = '2px';
        });
    }

    // Contact form animation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            form.style.animation = 'popIn 0.7s';
            setTimeout(() => { form.style.animation = ''; }, 700);
            alert('Thank you for reaching out!');
        });
    }
});
