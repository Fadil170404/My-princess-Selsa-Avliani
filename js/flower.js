document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('music');
  if (music) {
    music.play().catch(() => {
      // Jika browser memblokir, musik akan berputar saat layar disentuh pertama kali
      document.addEventListener('click', () => {
        music.play();
      }, { once: true });
    });
  }
});
