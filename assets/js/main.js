  function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.getElementById('nav-' + name)?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submitForm() {
    const success = document.getElementById('form-success');
    success.style.display = 'block';
    setTimeout(() => { success.style.display = 'none'; }, 5000);
  }
