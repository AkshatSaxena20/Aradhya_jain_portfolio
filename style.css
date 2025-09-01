/* General Styling & Variables */
:root {
    --primary-color: #FFC107; /* Tech Gold */
    --background-color: #1E1E1E; /* Dark Slate */
    --surface-color: rgba(38, 38, 38, 0.6);
    --text-color: #F5F5F5;
    --secondary-text-color: #A3A3A3;
    --border-color: rgba(255, 193, 7, 0.2);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    padding: 2rem;
    min-height: 100vh;
}
h1, h2, h3, h4 { font-weight: 700; }

/* --- NEW: Particles.js Background Style --- */
#particles-js {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}

/* Main Container */
.main-container { width: 100%; max-width: 1100px; z-index: 1; }

/* Main Profile Card */
.main-profile-card {
    text-align: center;
    padding: 2.5rem;
    background: var(--surface-color);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 15px 30px rgba(0,0,0,0.3);
    margin-bottom: 1.5rem;
}
.main-profile-card h1 { font-size: 3rem; }
.main-profile-card h2 { font-size: 1.5rem; color: var(--secondary-text-color); }
.main-profile-card .typing { color: var(--primary-color); }
.main-profile-card .summary { max-width: 700px; margin: 1rem auto 1.5rem auto; font-size: 1.1rem; }
.contact-links { display: flex; justify-content: center; gap: 2rem; }
.contact-links a { color: var(--secondary-text-color); text-decoration: none; font-weight: 500; transition: color 0.3s; }
.contact-links a:hover { color: var(--primary-color); }
.contact-links i { margin-right: 0.5rem; }

/* Bento Box Grid */
.bento-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.bento-card {
    background: var(--surface-color);
    backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    transition: transform 0.3s ease, border-color 0.3s ease;
}
.bento-card:hover { transform: translateY(-5px); border-color: rgba(255, 193, 7, 0.4); }
.bento-card h3 { display: flex; align-items: center; gap: 0.75rem; font-size: 1.2rem; color: #fff; margin-bottom: 1rem; }
.bento-card p { font-size: 0.95rem; color: var(--secondary-text-color); }

/* Grid Spanning */
.experience-card { grid-column: span 2; grid-row: span 2; }

/* Card Specifics */
.experience-card .job { margin-bottom: 1rem; }
.experience-card .job:last-child { margin-bottom: 0; }
.experience-card h4 { font-size: 1rem; color: var(--primary-color); }
.skills-card .pills { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skills-card span { background: #333; padding: 0.4rem 0.8rem; border-radius: 8px; font-size: 0.85rem; }
.contact-card { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
.btn { display: inline-block; padding: 0.8rem 1.5rem; margin-top: 1rem; background: var(--primary-color); color: #000; border: none; border-radius: 8px; text-decoration: none; font-weight: 700; cursor: pointer; transition: all 0.3s; }
.btn:hover { background-color: #ffd65c; }

/* Modal Styles */
.modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.6); align-items: center; justify-content: center; }
.modal-content { position: relative; background: var(--surface-color); margin: auto; padding: 2.5rem; border-radius: 15px; width: 90%; max-width: 500px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
@keyframes fadeIn { from {opacity: 0; transform: scale(0.9);} to {opacity: 1; transform: scale(1);} }
.close-btn { color: #aaa; position: absolute; top: 1rem; right: 1.5rem; font-size: 28px; font-weight: bold; cursor: pointer; }
.modal-content h2 { margin-bottom: 1.5rem; text-align: center; }
#contactForm .form-row { display: flex; gap: 1rem; margin-bottom: 1rem; }
#contactForm input, #contactForm textarea { width: 100%; padding: 1rem; background: var(--background-color); border: 1px solid #444; border-radius: 8px; color: #fff; }
#contactForm input:focus, #contactForm textarea:focus { outline: none; border-color: var(--primary-color); }
.btn-submit { display: block; width: 100%; padding: 1rem; margin-top: 1rem; background: var(--primary-color); color: #000; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }
.btn-submit.success { background: #28a745; color: #fff; }

/* Responsive */
@media(max-width: 992px) { .bento-grid { grid-template-columns: 1fr 1fr; } .experience-card { grid-column: span 2; } }
@media(max-width: 768px) { .bento-grid { grid-template-columns: 1fr; } .experience-card, .skills-card { grid-column: span 1; } body { padding: 1rem; } }
