document.addEventListener('DOMContentLoaded', function() {

    // Typing effect for titles
    new Typed('.typing', {
        strings: ['Web3 Specialist.', 'Frontend Architect.', 'Performance Optimizer.'],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true
    });
    
    // --- NEW: Starlight Constellation Background ---
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#FFC107" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.6, "random": true },
            "size": { "value": 2, "random": true },
            "line_linked": { "enable": false }, // Lines are handled by interactivity
            "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": false }, "resize": true },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": { "opacity": 0.3 }
                }
            }
        },
        "retina_detect": true
    });

    // Modal Logic
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("contactBtn");
    const emailLink = document.getElementById("emailLink");
    const closeBtn = document.querySelector(".close-btn");
    
    const openModal = (e) => { e.preventDefault(); modal.style.display = "flex"; };

    openBtn.onclick = openModal;
    emailLink.onclick = openModal;
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
                    submitButton.innerHTML = 'Sent!';
                    submitButton.classList.add('success');
                    
                    setTimeout(() => {
                        form.reset();
                        modal.style.display = "none";
                        submitButton.classList.remove('success');
                        submitButton.disabled = false;
                        submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    }, 2000);
                } else { throw new Error('Network response was not ok.'); }
            })
            .catch(error => {
                console.error('Error!', error.message);
                submitButton.innerHTML = 'Error!';
                 setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                }, 3000);
            });
    });
});
