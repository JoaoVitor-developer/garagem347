const services = document.querySelectorAll('.service');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1
    });

    services.forEach(service => {
      service.style.opacity = '0';
      service.style.transform = 'translateY(40px)';
      service.style.transition = 'all 0.6s ease-out';
      observer.observe(service);
    });

    // Toggle menu mobile
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  const sucesso = document.getElementById('mensagem-sucesso');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita sair da página

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        sucesso.style.display = 'block';
        setTimeout(() => {
          sucesso.style.display = 'none';
        }, 5000);
      } else {
        alert('Erro ao enviar. Tente novamente.');
      }
    }).catch(error => {
      alert('Erro ao enviar. Tente novamente.');
    });
  });
});
