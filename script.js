// JavaScript básico para interactividad

document.addEventListener('DOMContentLoaded', function () {
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // Mostrar el primer testimonio
    showTestimonial(currentTestimonial);

    // Cambiar testimonio cada 5 segundos
    setInterval(nextTestimonial, 5000);
});

