document.addEventListener('DOMContentLoaded', function() {

    // Typing effect for titles
    new Typed('.typing', {
        strings: ['user-centric Web3 interfaces.', 'performant DeFi platforms.', 'scalable frontend systems.'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });

    // --- MODIFIED: Brighter, Glowing "Blueprint" Particle Background ---
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80, /* Increased particle count */
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3182CE"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.8, /* Increased base opacity for a brighter feel */
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.4, /* Increased minimum opacity for more glow */
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3182CE",
                "opacity": 0.3, /* Increased line opacity */
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5 /* Lines become more visible on hover */
                    }
                }
            }
        },
        "retina_detect": true
    });
    
    // Modal Logic
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("contactBtn");
    const closeBtn = document.querySelector(".close-btn");
    const emailLink = document.getElementById("emailLink");

    const openModal = () => { modal.style.display = "flex"; };

    openBtn.onclick = openModal;
    if(emailLink) { emailLink.onclick = openModal; }
    closeBtn.onclick = () => { modal.style.display = "none"; };
    window.onclick = (event) => { if (event.target == modal) { modal.style.display = "none"; } };
    
    // Form Submission Logic
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('.btn-submit');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // IMPORTANT: Replace with your Google Apps Script URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwrUc2VSLzQgnTZeyJWWfHeEFvwQQ8i_lu8tSYsgTyF6L0uk78Hr1zbUPFS4-dPnI1Luw/exec'; 
        const formData = new FormData(form);
        
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';

        fetch(scriptURL, { method: 'POST', body: formData})
            .then(response => {
                if(response.ok) {
                    submitButton.innerHTML = 'Sent <i class="fas fa-check"></i>';
                    submitButton.classList.add('success');
                    
                    setTimeout(() => {
                        form.reset();
                        modal.style.display = "none";
                        submitButton.classList.remove('success');
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    }, 2000);
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitButton.innerHTML = 'Error!';
                submitButton.classList.add('error');

                 setTimeout(() => {
                    submitButton.classList.remove('error');
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                }, 3000);
            });
    });
});