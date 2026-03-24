document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('music');
  
  if (music) {
    // 1. Coba putar otomatis dulu
    const playPromise = music.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // 2. Jika gagal (karena diblokir HP), tunggu sentuhan layar pertama
        console.log("Autoplay diblokir HP, menunggu sentuhan user...");
        
        const playOnTouch = () => {
          music.play();
          // Hapus listener setelah musik berhasil jalan agar tidak boros baterai
          document.removeEventListener('touchstart', playOnTouch);
          document.removeEventListener('click', playOnTouch);
        };

        // Tambahkan listener untuk sentuhan (HP) dan klik (Laptop)
        document.addEventListener('touchstart', playOnTouch);
        document.addEventListener('click', playOnTouch);
      });
    }
  }
});
