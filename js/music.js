document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const audio = document.getElementById('myAudio');

  if (openBtn && audio) {
    openBtn.addEventListener('click', function(e) {
      // 1. Putar lagu
      audio.play().catch(err => {
        console.log("Musik tertunda: ", err);
      });

      // 2. Tahan sebentar biar lagu masuk (0.5 detik) baru pindah halaman
      e.preventDefault();
      const targetUrl = this.getAttribute('href');
      
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); 
    });
  }
});
