// ── Page navigation ──────────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── EmailJS ───────────────────────────────────────────────────────────────────
emailjs.init('0WEsqLC86gVnc7Uqm');

function submitForm(btn) {
  const form    = btn.closest('.contact-form');
  const success = document.getElementById('form-success');
  const error   = document.getElementById('form-error');

  // Hide any previous messages
  success.style.display = 'none';
  if (error) error.style.display = 'none';

  // Basic validation
  const name  = form.querySelector('[name="from_name"]').value.trim();
  const email = form.querySelector('[name="from_email"]').value.trim();
  if (!name || !email) {
    alert('Please fill in your name and email before sending.');
    return;
  }

  // Disable button while sending
  btn.disabled = true;
  btn.textContent = 'Sending…';

  const params = {
    from_name:  name,
    from_email: email,
    phone:      form.querySelector('[name="phone"]').value.trim(),
    message:    form.querySelector('[name="message"]').value.trim(),
  };

  emailjs.send('service_swhz7ch', 'template_r59d4g5', params)
    .then(() => {
      success.style.display = 'block';
      form.reset();
      setTimeout(() => { success.style.display = 'none'; }, 6000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      alert('Sorry, something went wrong. Please call us at (732) 644-9700.');
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    });
}
