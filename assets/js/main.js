// ── Page navigation ──────────────────────────────────────────────────────────
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name)?.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Formspree contact form ────────────────────────────────────────────────────
function submitForm(btn) {
  const form    = btn.closest('.contact-form');
  const success = document.getElementById('form-success');

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
  success.style.display = 'none';

  const data = {
    name:    name,
    email:   email,
    phone:   form.querySelector('[name="phone"]').value.trim(),
    message: form.querySelector('[name="message"]').value.trim(),
  };

  fetch('https://formspree.io/f/xjglvrzd', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body:    JSON.stringify(data),
  })
    .then(res => {
      if (res.ok) {
        success.style.display = 'block';
        form.reset();
        setTimeout(() => { success.style.display = 'none'; }, 6000);
      } else {
        return res.json().then(body => { throw new Error(body.error || 'Unknown error'); });
      }
    })
    .catch(err => {
      console.error('Formspree error:', err);
      alert('Sorry, something went wrong. Please call us at (732) 644-9700.');
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    });
}
