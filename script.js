// ========================================
// 🌐 Responsive Navigation (Hamburger Menu)
// ========================================
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

// ========================================
// 📚 Accordion (Programs Page)
// ========================================
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// ========================================
// 🖼️ Lightbox for Images (Gallery/Programs)
// ========================================
const images = document.querySelectorAll('.lightbox-img');
images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${img.src}" alt="${img.alt}" class="modal-img">`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => modal.remove());
  });
});

// ========================================
// 📝 Enquiry Form (enquiry.html)
// ========================================
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const type = document.getElementById('type').value;
    const response = document.getElementById('response');
    response.textContent = `✅ Thank you, ${name}! We’ll contact you soon about your ${type} enquiry.`;
    response.style.opacity = 0;
    response.style.transition = 'opacity 0.8s ease';
    setTimeout(() => (response.style.opacity = 1), 100);
    enquiryForm.reset();
  });
}

// ========================================
// 📩 Contact Form (contact.html)
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const response = document.getElementById('contactResponse');
    response.textContent = `📬 Thank you ${name}, your message has been sent successfully!`;
    response.style.opacity = 0;
    response.style.transition = 'opacity 0.8s ease';
    setTimeout(() => (response.style.opacity = 1), 100);
    contactForm.reset();
  });
}

// ========================================
// ✨ Smooth Scroll for Internal Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
