// تأكيد تحميل مكتبة GSAP من الإنترنت
gsap.registerPlugin(ScrollTrigger);

// تأثيرات بسيطة مع GSAP
window.onload = () => {
    gsap.from(".hero-content h1", {
        opacity: 0,
        y: -50,
        duration: 1.5,
        ease: "power4.out"
    });

    gsap.from(".hero-content .cta", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power4.out",
        delay: 1
    });

    gsap.from(".promo-video h2", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power4.out",
        delay: 1.5
    });

    gsap.from(".platform-btn", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power4.out",
        delay: 2
    });
};
document.addEventListener('DOMContentLoaded', () => {
    // Apply GSAP animations to elements
    gsap.from(".title", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".description", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".platform-btn", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2, delay: 1 });
});
