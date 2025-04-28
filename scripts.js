/* global gsap, ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

  // Hero animations
  gsap.from(".title",       {opacity:0, y:-60, duration:1.2, ease:"power3.out"});
  gsap.from(".platform-btn",{opacity:0, scale:.5, duration:1.2, ease:"back.out(1.7)", delay:.4});
  gsap.from(".description", {opacity:0, y:50,  duration:1.2, ease:"power3.out",     delay:.8});

  // Video placeholder fade-in
  gsap.from(".video-placeholder", {
    scrollTrigger:{trigger:".video-placeholder", start:"top 80%"},
    opacity:0, y:60, duration:1.2, ease:"power3.out"
  });
});

/* Lazy-load YouTube iframe */
function loadTrailer(){
  const box = document.querySelector('.video-placeholder');
  box.outerHTML = `
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/EOQF_Iul4qA?autoplay=1"
              title="Elementor Knight Trailer"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>`;
}

/* PWA Service Worker */
if ('serviceWorker' in navigator){
  window.addEventListener('load', () =>{
    navigator.serviceWorker.register('sw.js')
      .catch(err => console.error('SW registration failed:', err));
  });
}
