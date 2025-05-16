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