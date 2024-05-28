// JavaScript for Infinito Web Design Studio

document.addEventListener('DOMContentLoaded', function() {

    // Smooth Scrolling for all anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic Date Update
    const yearSpan = document.querySelector('.current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Navbar Shrink Function
    function navbarShrink() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY === 0) {
            navbar.classList.remove('navbar-shrink');
        } else {
            navbar.classList.add('navbar-shrink');
        }
    }
    document.addEventListener('scroll', navbarShrink);

    // Hover effects for Portfolio Items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const hoverContent = item.querySelector('.portfolio-hover-content');
            hoverContent.style.transform = 'scale(1.5)';
        });
        item.addEventListener('mouseleave', () => {
            const hoverContent = item.querySelector('.portfolio-hover-content');
            hoverContent.style.transform = 'scale(1)';
        });
    });

});

// Additional scripts for responsive behavior and interactive elements can be added here
