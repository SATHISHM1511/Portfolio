 // Mobile Menu Toggle
    
// Mobile Menu Toggle with Hamburger Animation
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle menu function
function toggleMenu() {
  // Toggle hamburger animation
  menuBtn.classList.toggle('active');
  
  // Toggle mobile menu
  if (mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
    mobileMenu.style.maxHeight = "0px";
  } else {
    mobileMenu.style.maxHeight = "300px";
  }
}

// Hamburger button click
menuBtn.addEventListener('click', toggleMenu);

// Close menu when any link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.maxHeight = "0px";
    menuBtn.classList.remove('active');
  });
});

// Close menu when clicking outside (anywhere on screen)
document.addEventListener('click', function(event) {
  const isClickInsideNav = menuBtn.contains(event.target) || mobileMenu.contains(event.target);
  
  if (!isClickInsideNav && mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
    mobileMenu.style.maxHeight = "0px";
    menuBtn.classList.remove('active');
  }
});


// Close menu when clicking outside (anywhere on screen)
document.addEventListener('click', function(event) {
  const isClickInsideNav = menuBtn.contains(event.target) || mobileMenu.contains(event.target);
  
  if (!isClickInsideNav && mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== "0px") {
    mobileMenu.style.maxHeight = "0px";
    menuBtn.classList.remove('active');
  }
});






    // Particles.js Config
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 80 },
        "size": { "value": 3 },
        "move": { "speed": 2 },
        "line_linked": { "enable": true },
        "color": { "value": "#ffffff" }
      }
    });

    // GSAP Animations
    gsap.from("nav", { y: -80, duration: 1, ease: "power3.out" });
    gsap.from("#home h1", { opacity: 0, y: 30, duration: 1.2, delay: 0.3 });
    gsap.from("#home p", { opacity: 0, y: 20, duration: 1, delay: 0.6 });

    
    // ADD THIS TYPEWRITER CODE TO YOUR EXISTING script.js FILE
// (Keep all your existing code and add these functions)

// Typewriter Effect - Mobile/Desktop/Tablet Responsive
const texts = [
    "Web Developer",
    "Designer", 
    "Graphic Designer",
    "Creator"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    const currentText = texts[textIndex];
    
    // Responsive typing speed based on device
    const isMobile = window.innerWidth <= 768;
    const typingSpeed = isMobile ? 120 : 100;
    const deletingSpeed = isMobile ? 60 : 50;
    const pauseTime = isMobile ? 2500 : 2000;
    
    if (!isDeleting && charIndex < currentText.length) {
        // Typing
        typewriterElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        // Deleting
        typewriterElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
        // Pause before deleting
        setTimeout(() => {
            isDeleting = true;
            typeWriter();
        }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        // Move to next text
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
    }
}

// Start typewriter after page loads
setTimeout(typeWriter, 1500);

    

 // Handle form input floating labels
        document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
            // Check on page load if input has value
            function checkInput() {
                if (input.value.trim() !== '') {
                    input.classList.add('has-content');
                } else {
                    input.classList.remove('has-content');
                }
            }

            // Check on input
            input.addEventListener('input', checkInput);
            input.addEventListener('blur', checkInput);
            
            // Initial check
            checkInput();
        });

        // Email and phone click handlers
        function openEmail() {
            window.location.href = 'mailto:sathishms1511@gmail.com';
        }

        function callPhone() {
            window.location.href = 'tel:9789956074';
        }

        // Form validation and submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default

    // Validation code here (your existing validation)
    let hasErrors = false;
    const formData = new FormData(this);
    const requiredFields = ['name', 'email', 'message'];

    requiredFields.forEach(fieldName => {
        const value = formData.get(fieldName);
        const field = document.querySelector(`[name="${fieldName}"]`);
        const group = field.closest('.form-group');
        group.classList.remove('error');
        if (!value || value.trim() === '') {
            group.classList.add('error');
            hasErrors = true;
        }
    });

    // Email validation
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        const emailGroup = document.querySelector('input[name="email"]').closest('.form-group');
        emailGroup.classList.add('error');
        emailGroup.querySelector('.form-error').textContent = 'Please enter a valid email address.';
        hasErrors = true;
    }

    if (hasErrors) return;

    // Send form to Formspree
    const btn = this.querySelector('.submit-btn');
    const btnText = btn.querySelector('span');
    const originalText = btnText.textContent;

    btn.disabled = true;
    btnText.textContent = 'Sending...';

    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            btnText.textContent = 'Sent!';
            this.reset();
            document.querySelectorAll('.form-input, .form-textarea').forEach(input => input.classList.remove('has-content'));
        } else {
            btnText.textContent = 'Error!';
        }
        setTimeout(() => {
            btnText.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    }).catch(() => {
        btnText.textContent = 'Error!';
        setTimeout(() => {
            btnText.textContent = originalText;
            btn.disabled = false;
        }, 2000);
    });
});

        

        // Add ripple effect to social icons
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
               // e.preventDefault();
                
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.6);
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    left: 50%;
                    top: 50%;
                    width: 80px;
                    height: 80px;
                    margin-left: -40px;
                    margin-top: -40px;
                    pointer-events: none;
                `;
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // Add hover effects to info items
        document.querySelectorAll('.info-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add CSS for ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

 const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.project-card').forEach(card => {
            card.style.animationPlayState = 'paused';
            observer.observe(card);
        });

        // Add hover sound effect (optional)
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Optional: Add subtle sound effect here
                card.style.transform = 'translateY(-15px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });

    /* Mobile-optimized scroll animation observer */
(function(){
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.ani-reveal').forEach(el => el.classList.add('ani-in'));
    return;
  }
  
  // Different thresholds for different devices
  const isMobile = window.innerWidth <= 768;
  const threshold = isMobile ? 0.1 : 0.15; // Lower threshold for mobile
  
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ani-in');
        obs.unobserve(entry.target);
      }
    });
  }, { 
    threshold: threshold,
    rootMargin: isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
  });

  document.querySelectorAll('.ani-reveal').forEach(el => io.observe(el));
})();

// Find and replace your existing scroll animation observer code

/* Fixed Scroll Animation Observer */
(function(){
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.ani-reveal').forEach(el => el.classList.add('ani-in'));
    return;
  }
  
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ani-in');
        // Keep observing for re-animations
      } else {
        // Remove class when out of view for re-animation
        entry.target.classList.remove('ani-in');
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.ani-reveal').forEach(el => io.observe(el));
})();

/* Fix smooth scroll jumping issue */
(function(){
  const offsetPx = 80; // Navbar height
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id.length <= 1) return;
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    
    // Calculate proper position
    const targetRect = target.getBoundingClientRect();
    const targetTop = window.pageYOffset + targetRect.top - offsetPx;
    
    window.scrollTo({ 
      top: targetTop, 
      behavior: 'smooth' 
    });
  });
})();

/* Smooth scroll with navbar offset */
(function(){
  const offsetPx = 72; // adjust if navbar height different
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id.length <= 1) return;
    const target = document.querySelector(id);
    if(!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.pageYOffset - offsetPx;
    window.scrollTo({ top, behavior: 'smooth' });
  });
})();