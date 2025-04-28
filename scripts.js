/* global gsap, ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // Hero
    gsap.from(".title", {
        opacity: 0,
        y: -50,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.from(".platform-btn", {
        opacity: 0,
        scale: 0.5,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.4
    });

    gsap.from(".description", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8
    });

    // Trailer enters on scroll
    gsap.from(".video-container", {
        scrollTrigger: {
            trigger: ".video-container",
            start: "top 80%"
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
    });
});
