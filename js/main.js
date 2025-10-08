// JavaScript extracted from inline script and improved

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add hover effect animations (kept minimal)
  const cards = document.querySelectorAll('.service-card, .tool-card, .work-example-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
  });

  // Contact button functionality - wired by DOM order
  const contactBtns = document.querySelectorAll('.contact-btn');
  if (contactBtns.length >= 2) {
    contactBtns[0].addEventListener('click', () => {
      alert('Email: contact@hardikkhyal.com');
    });
    contactBtns[1].addEventListener('click', () => {
      alert('Phone: +91 XXXXXXXXXX');
    });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
  });

  // Menu dots functionality
  const menuDots = document.querySelector('.menu-dots');
  if (menuDots) {
    menuDots.addEventListener('click', () => {
      alert('Menu options:\n- Edit Profile\n- Share Portfolio\n- Download PDF\n- Settings');
    });
  }

});
