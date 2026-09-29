/* ==========================================================================
   SAWAN CINEMATOGRAPHER — SCRIPT
   You do not need to edit this file to add new photos/videos or change
   text — see the EASY EDIT comments inside index.html for that.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Sticky navigation darkens on scroll ---------- */
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile hamburger menu ---------- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  /* ---------- Optional hero video: fall back to hero.jpg if hero.mp4
     is missing or fails to load. If you uncomment the <video> tag in
     index.html and add assets/videos/hero.mp4, this keeps things safe. ---------- */
  var heroVideo = document.getElementById('heroVideo');
  if (heroVideo) {
    heroVideo.addEventListener('error', function () {
      heroVideo.style.display = 'none';
    });
  }

  /* ---------- Portfolio lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxContent = document.getElementById('lightboxContent');
  var lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.portfolio-item').forEach(function (item) {
    item.addEventListener('click', function () {
      var type = item.getAttribute('data-type');
      var src = item.getAttribute('data-src');
      lightboxContent.innerHTML = '';

      if (type === 'video') {
        var video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        lightboxContent.appendChild(video);
      } else {
        var img = document.createElement('img');
        img.src = src;
        img.alt = 'Portfolio image';
        lightboxContent.appendChild(img);
      }
      lightbox.classList.add('open');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightboxContent.innerHTML = '';
  }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- YouTube thumbnails: click to embed and play ---------- */
  document.querySelectorAll('.yt-thumb').forEach(function (thumb) {
    thumb.addEventListener('click', function () {
      var id = thumb.getAttribute('data-yt');
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
      iframe.width = '100%';
      iframe.height = '100%';
      iframe.style.aspectRatio = '16/9';
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      thumb.innerHTML = '';
      thumb.appendChild(iframe);
    }, { once: true });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

});
