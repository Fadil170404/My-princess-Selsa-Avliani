document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const audio = document.getElementById('myAudio');

  if (openBtn && audio) {
    openBtn.addEventListener('click', function(e) {
      e.preventDefault(); 
      const targetUrl = this.getAttribute('href');

      console.log("Mencoba memutar musik...");
      
      audio.play().then(() => {
        console.log("Musik berhasil diputar!");
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 800); 
      }).catch(err => {
        console.error("Gagal putar musik. Error:", err);
        window.location.href = targetUrl;
      });
    });
  } else {
    console.error("Elemen audio atau tombol tidak ditemukan!");
  }
});
