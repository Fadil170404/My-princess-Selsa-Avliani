document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const audio = document.getElementById('music'); // ID diganti jadi 'music'

  if (openBtn && audio) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault(); 
      const targetUrl = this.getAttribute('href');

      // Paksa muat ulang audio sebelum diputar
      audio.load();
      
      audio.play().then(() => {
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 800); 
      }).catch(err => {
        console.error("Gagal putar:", err);
        window.location.href = targetUrl;
      });
    });
  }
});
