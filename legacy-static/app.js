document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Mobile Menu Toggle
  // ==========================================
  const mobileMenuBtn = document.querySelector('.nav-mobile-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = navLinksContainer.style.display !== 'flex';
      navLinksContainer.style.display = isHidden ? 'flex' : 'none';
      if (isHidden) {
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '60px';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.width = '100%';
        navLinksContainer.style.background = 'rgba(255, 255, 255, 0.98)';
        navLinksContainer.style.padding = '20px';
        navLinksContainer.style.borderRadius = '16px';
        navLinksContainer.style.border = '2px solid var(--outline-color)';
        navLinksContainer.style.gap = '20px';
      }
    });
  }

  // ==========================================
  // 2. Sticky Navbar, Parallax & Timeline Progress
  // ==========================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  const timelineSection = document.getElementById('process');
  const timelineProgress = document.getElementById('timeline-progress');
  const timelineContainer = document.querySelector('.timeline-container');
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const parallaxNodes = document.querySelectorAll('.parallax-bg-node');

  window.addEventListener('scroll', () => {
    // A. Active Section Navbar Highlights
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });

    // B. Parallax floating background elements in timeline
    if (timelineSection && parallaxNodes.length > 0) {
      const sectionRect = timelineSection.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const viewportHeight = window.innerHeight;
      
      if (sectionTop < viewportHeight && sectionRect.bottom > 0) {
        const distance = viewportHeight - sectionTop;
        parallaxNodes.forEach(node => {
          const speed = parseFloat(node.getAttribute('data-speed')) || 0.1;
          const yOffset = distance * speed;
          let rotation = '';
          if (node.classList.contains('node-2')) {
            rotation = ' rotate(45deg)';
          } else if (node.classList.contains('node-3')) {
            rotation = ' rotate(15deg)';
          }
          node.style.transform = `translateY(${yOffset}px)${rotation}`;
        });
      }
    }

    // C. Timeline dynamic vertical line drawing
    if (timelineContainer && timelineProgress && timelineSteps.length > 0) {
      const containerRect = timelineContainer.getBoundingClientRect();
      const containerHeight = containerRect.height;
      const containerTop = containerRect.top;
      const viewportHeight = window.innerHeight;
      
      if (containerTop < (viewportHeight / 2)) {
        const scrolledDistance = (viewportHeight / 2) - containerTop;
        const percent = Math.min(Math.max((scrolledDistance / containerHeight) * 100, 0), 100);
        timelineProgress.style.height = `${percent}%`;
        
        timelineSteps.forEach(step => {
          const stepRect = step.getBoundingClientRect();
          if (stepRect.top < (viewportHeight / 2) + 50) {
            step.classList.add('active');
          } else {
            step.classList.remove('active');
          }
        });
      } else {
        timelineProgress.style.height = '0%';
        timelineSteps.forEach(step => step.classList.remove('active'));
      }
    }
  });

  // ==========================================
  // 3. Embedded Quadrants Hover Linkages
  // ==========================================
  const embeddedCards = document.querySelectorAll('.embedded-card');
  const quadRects = document.querySelectorAll('.quad-rect');
  
  if (embeddedCards.length > 0 && quadRects.length > 0) {
    embeddedCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const quad = card.getAttribute('data-quad');
        const targetRect = document.querySelector(`.quad-rect.quad-${quad.toLowerCase()}`);
        if (targetRect) targetRect.classList.add('active');
        card.classList.add('active');
      });
      
      card.addEventListener('mouseleave', () => {
        const quad = card.getAttribute('data-quad');
        const targetRect = document.querySelector(`.quad-rect.quad-${quad.toLowerCase()}`);
        if (targetRect) targetRect.classList.remove('active');
        card.classList.remove('active');
      });
    });
    
    quadRects.forEach(rect => {
      rect.addEventListener('mouseenter', () => {
        let quad = '';
        if (rect.classList.contains('quad-a')) quad = 'A';
        else if (rect.classList.contains('quad-b')) quad = 'B';
        else if (rect.classList.contains('quad-c')) quad = 'C';
        else if (rect.classList.contains('quad-d')) quad = 'D';
        
        const targetCard = document.querySelector(`.embedded-card[data-quad="${quad}"]`);
        if (targetCard) targetCard.classList.add('active');
        rect.classList.add('active');
      });
      
      rect.addEventListener('mouseleave', () => {
        let quad = '';
        if (rect.classList.contains('quad-a')) quad = 'A';
        else if (rect.classList.contains('quad-b')) quad = 'B';
        else if (rect.classList.contains('quad-c')) quad = 'C';
        else if (rect.classList.contains('quad-d')) quad = 'D';
        
        const targetCard = document.querySelector(`.embedded-card[data-quad="${quad}"]`);
        if (targetCard) targetCard.classList.remove('active');
        rect.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 4. Business Model Diamonds Hover Linkages
  // ==========================================
  const bizCards = document.querySelectorAll('.biz-model-card');
  const bizDiamonds = document.querySelectorAll('.biz-diamond');
  
  if (bizCards.length > 0 && bizDiamonds.length > 0) {
    bizCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const model = card.getAttribute('data-model');
        let diaClass = '';
        if (model === 'scout') diaClass = 'top';
        else if (model === 'fundraise') diaClass = 'right';
        else if (model === 'earn') diaClass = 'bottom';
        else if (model === 'grow') diaClass = 'left';
        
        const targetDia = document.querySelector(`.biz-diamond.dia-${diaClass}`);
        if (targetDia) targetDia.classList.add('active');
        card.classList.add('active');
      });
      
      card.addEventListener('mouseleave', () => {
        const model = card.getAttribute('data-model');
        let diaClass = '';
        if (model === 'scout') diaClass = 'top';
        else if (model === 'fundraise') diaClass = 'right';
        else if (model === 'earn') diaClass = 'bottom';
        else if (model === 'grow') diaClass = 'left';
        
        const targetDia = document.querySelector(`.biz-diamond.dia-${diaClass}`);
        if (targetDia) targetDia.classList.remove('active');
        card.classList.remove('active');
      });
    });
    
    bizDiamonds.forEach(dia => {
      dia.addEventListener('mouseenter', () => {
        let model = '';
        if (dia.classList.contains('dia-top')) model = 'scout';
        else if (dia.classList.contains('dia-right')) model = 'fundraise';
        else if (dia.classList.contains('dia-bottom')) model = 'earn';
        else if (dia.classList.contains('dia-left')) model = 'grow';
        
        const targetCard = document.querySelector(`.biz-model-card[data-model="${model}"]`);
        if (targetCard) targetCard.classList.add('active');
        dia.classList.add('active');
      });
      
      dia.addEventListener('mouseleave', () => {
        let model = '';
        if (dia.classList.contains('dia-top')) model = 'scout';
        else if (dia.classList.contains('dia-right')) model = 'fundraise';
        else if (dia.classList.contains('dia-bottom')) model = 'earn';
        else if (dia.classList.contains('dia-left')) model = 'grow';
        
        const targetCard = document.querySelector(`.biz-model-card[data-model="${model}"]`);
        if (targetCard) targetCard.classList.remove('active');
        dia.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 5. Why Founders Trust Us Hover Linkages
  // ==========================================
  const trustCards = document.querySelectorAll('.trust-card');
  const trustBackCards = document.querySelectorAll('.trust-back-card');
  
  if (trustCards.length > 0 && trustBackCards.length > 0) {
    trustCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const trustId = card.getAttribute('data-trust');
        const targetBackCard = document.querySelector(`.trust-back-card.card-${trustId}`);
        if (targetBackCard) targetBackCard.classList.add('active');
        card.classList.add('active');
      });
      
      card.addEventListener('mouseleave', () => {
        const trustId = card.getAttribute('data-trust');
        const targetBackCard = document.querySelector(`.trust-back-card.card-${trustId}`);
        if (targetBackCard) targetBackCard.classList.remove('active');
        card.classList.remove('active');
      });
    });
    
    trustBackCards.forEach(backCard => {
      const numSpan = backCard.querySelector('span');
      if (numSpan) {
        const trustId = numSpan.innerText.trim();
        backCard.addEventListener('mouseenter', () => {
          const targetCard = document.querySelector(`.trust-card[data-trust="${trustId}"]`);
          if (targetCard) targetCard.classList.add('active');
          backCard.classList.add('active');
        });
        
        backCard.addEventListener('mouseleave', () => {
          const targetCard = document.querySelector(`.trust-card[data-trust="${trustId}"]`);
          if (targetCard) targetCard.classList.remove('active');
          backCard.classList.remove('active');
        });
      }
    });
  }

  // ==========================================
  // 6. Scroll-to-Reveal Animation (Intersection Observer)
  // ==========================================
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.15,
    rootMargin: '0px'
  });

  animateElements.forEach(element => {
    revealObserver.observe(element);
  });

  // ==========================================
  // 7. Testimonial Carousel Controls
  // ==========================================
  const carousel = document.getElementById('portfolio-carousel');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  if (carousel && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: -480, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      carousel.scrollBy({ left: 480, behavior: 'smooth' });
    });
  }

  // ==========================================
  // 8. Scouting Agreement Modal Controls
  // ==========================================
  const openButtons = document.querySelectorAll('.open-agreement-btn');
  const modal = document.getElementById('agreement-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const closeSuccessBtn = document.getElementById('close-success-btn');
  const scoutForm = document.getElementById('scout-form');
  const formContainer = document.getElementById('form-container');
  const successScreen = document.getElementById('success-screen');
  const signatureBox = document.getElementById('signature-box');
  
  let isSigned = false;

  const openModal = () => {
    if (modal) {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
  };

  const closeModal = () => {
    if (modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Unlock background scrolling
      
      // Reset form states after close animation completes
      setTimeout(() => {
        if (scoutForm) scoutForm.reset();
        isSigned = false;
        if (signatureBox) {
          signatureBox.classList.remove('signed');
          signatureBox.querySelector('span').textContent = 'Click here to sign digitally';
        }
        if (formContainer) formContainer.style.display = 'block';
        if (successScreen) successScreen.style.display = 'none';
      }, 400);
    }
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeModal);

  // Close modal when clicking on backdrop
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Signature Pad Interaction
  if (signatureBox) {
    signatureBox.addEventListener('click', () => {
      isSigned = !isSigned;
      if (isSigned) {
        signatureBox.classList.add('signed');
        const contactName = document.getElementById('contact-name').value || 'Authorized Representative';
        signatureBox.querySelector('span').innerHTML = `✓ Signed by: <em>${contactName}</em> (${new Date().toLocaleDateString()})`;
      } else {
        signatureBox.classList.remove('signed');
        signatureBox.querySelector('span').textContent = 'Click here to sign digitally';
      }
    });
  }

  // Form submission handler
  if (scoutForm) {
    scoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (!isSigned) {
        alert('Please click the signature box to sign the scouting agreement digitally before submitting.');
        return;
      }

      // Capture values
      const formData = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        fundName: document.getElementById('fund-name').value,
        stage: document.getElementById('fund-stage').value,
        chequeSize: document.getElementById('cheque-size').value,
        thesis: document.getElementById('fund-thesis').value,
        signedDate: new Date().toISOString()
      };

      console.log('Scouting Agreement Submitted:', formData);

      // Transition form to success screen
      if (formContainer) formContainer.style.display = 'none';
      if (successScreen) successScreen.style.display = 'block';
    });
  }

  // ==========================================
  // 9. Auto-clone Business Model marquee cards
  // ==========================================
  const bizTrack = document.querySelector('.biz-marquee-track');
  if (bizTrack) {
    bizTrack.innerHTML += bizTrack.innerHTML;
  }
});
