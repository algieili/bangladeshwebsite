document.addEventListener('DOMContentLoaded', () => {
    // Navbar glass effect on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon from bars to times if using font-awesome (or unicode)
            if (navLinks.classList.contains('active')) {
                menuBtn.innerHTML = '&#10005;'; // X mark
            } else {
                menuBtn.innerHTML = '&#9776;'; // Hamburger
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '&#9776;';
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Observe all elements with hidden-element class
    document.querySelectorAll('.hidden-element').forEach((el) => {
        observer.observe(el);
    });
});
