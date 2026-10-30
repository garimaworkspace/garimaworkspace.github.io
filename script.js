
// ==============================
// GARIMA YADAV - PORTFOLIO
// JavaScript Interactions
// ==============================

// 1. Reveal elements when scrolling

const revealElements = document.querySelectorAll(
    '.section, .project-card, .skill-card'
);

// Add animation styling
const animationStyle = document.createElement('style');

animationStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(25px);
        transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .reveal.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;

document.head.appendChild(animationStyle);

// Observe elements as they enter the screen
const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

// Apply animation to each element
revealElements.forEach((element) => {

    element.classList.add('reveal');
    observer.observe(element);

});


// 2. Highlight active navigation link

const sections = document.querySelectorAll('section[id]');
const navigationLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            const currentId = entry.target.getAttribute('id');

            navigationLinks.forEach((link) => {

                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === '#' + currentId
                );

            });

        }

    });

}, {
    threshold: 0.4
});

sections.forEach((section) => {
    navObserver.observe(section);
});


// 3. Update copyright year automatically

const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Garima Yadav. All rights reserved.`;
}
