// ReadyForge AI - Home Services Template
// Minimal JS for smooth scrolling and form handling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Placeholder for AI assistant integration
// Replace the onclick on #ai-assistant with your preferred free chatbot
// Options: Tidio free, Crisp free, or custom Grok/xAI widget later

console.log('ReadyForge AI Home Services template loaded.');