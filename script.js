/**
 * IEEE INNOVATEX 2026 — OFFICIAL SCRIPTS
 * High-performance, zero external dependency, modern ES6+
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Ambient Dynamic Constellation Canvas
     -------------------------------------------------------------------------- */
  const canvas = document.getElementById('ambient-canvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.6 + 0.8;
        this.baseAlpha = Math.random() * 0.4 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationFrameId;

    function renderCanvas() {
      ctx.clearRect(0, 0, width, height);

      // Connect particles within distance
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 181, 226, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(renderCanvas);
    }

    renderCanvas();

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        renderCanvas();
      }
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Navbar & Mobile Drawer Navigation
     -------------------------------------------------------------------------- */
  const navbarHeader = document.getElementById('navbar-header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const drawerOverlay = document.getElementById('mobile-drawer-overlay');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle Mobile Menu
  function toggleMobileMenu(open) {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains('is-open');
    if (isOpen) {
      navMenu.classList.add('is-open');
      hamburgerBtn.classList.add('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      drawerOverlay.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      drawerOverlay.classList.remove('is-visible');
      document.body.style.overflow = '';
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }

  // Close mobile drawer when clicking any nav link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleMobileMenu(false);
      }
    });
  });

  // Sticky Navbar state
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbarHeader.classList.add('scrolled');
    } else {
      navbarHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     3. Active Scroll Spy (Highlight current section in nav)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     4. Live Event Countdown Timer
     -------------------------------------------------------------------------- */
  // Conference date: October 24, 2026, 09:00:00 IST
  const eventDate = new Date('2026-10-24T09:00:00+05:30').getTime();

  const daysEl = document.getElementById('days-val');
  const hoursEl = document.getElementById('hours-val');
  const minutesEl = document.getElementById('minutes-val');
  const secondsEl = document.getElementById('seconds-val');

  function updateCountdown() {
    const now = new Date().getTime();
    let distance = eventDate - now;

    // Fallback if event is past
    if (distance < 0) {
      distance = 21 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* --------------------------------------------------------------------------
     5. Smooth Scroll for Trigger Buttons
     -------------------------------------------------------------------------- */
  const registerTriggers = [
    document.getElementById('nav-register-btn'),
    document.getElementById('hero-register-btn'),
    document.getElementById('open-register-modal-btn')
  ];

  registerTriggers.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        const target = document.getElementById('register');
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          const nameInput = document.getElementById('reg-name');
          if (nameInput) {
            setTimeout(() => nameInput.focus(), 600);
          }
        }
      });
    }
  });

  /* --------------------------------------------------------------------------
     6. Registration Form Submission & Delegate Pass Generator
     -------------------------------------------------------------------------- */
  const regForm = document.getElementById('inline-register-form');
  const successBox = document.getElementById('reg-success-box');
  const passName = document.getElementById('pass-name');
  const passTier = document.getElementById('pass-tier');
  const passCode = document.getElementById('pass-code');

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('reg-name').value.trim();
      const emailVal = document.getElementById('reg-email').value.trim();
      const institutionVal = document.getElementById('reg-institution').value.trim();
      const tierSelect = document.getElementById('reg-tier');
      const tierText = tierSelect.options[tierSelect.selectedIndex].text;

      // Validation
      if (!nameVal) {
        alert('Please enter your full name.');
        document.getElementById('reg-name').focus();
        return;
      }

      if (!emailVal || !emailVal.includes('@') || !emailVal.includes('.')) {
        alert('Please enter a valid email address.');
        document.getElementById('reg-email').focus();
        return;
      }

      if (!institutionVal) {
        alert('Please enter your college or institution.');
        document.getElementById('reg-institution').focus();
        return;
      }

      // Generate random 4-digit code
      const randomCode = Math.floor(1000 + Math.random() * 9000);

      // Populate pass receipt
      if (passName) passName.textContent = nameVal;
      if (passTier) passTier.textContent = tierText;
      if (passCode) passCode.textContent = randomCode;

      // Hide form and display success box
      regForm.style.display = 'none';
      if (successBox) {
        successBox.style.display = 'block';
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Persist to localStorage
      try {
        localStorage.setItem(
          'ieee_innovatex_registration',
          JSON.stringify({
            name: nameVal,
            email: emailVal,
            institution: institutionVal,
            tier: tierText,
            passId: `IX26-${randomCode}`,
            timestamp: new Date().toISOString()
          })
        );
      } catch (err) {
        console.warn('LocalStorage unavailable:', err);
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. Floating Back to Top Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. Card Entrance & Reveal on Scroll (IntersectionObserver)
     -------------------------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.society-card, .feature-card, .speaker-card, .benefit-card, .timeline-item').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  console.log('IEEE InnovateX 2026 site initialized successfully.');
});
