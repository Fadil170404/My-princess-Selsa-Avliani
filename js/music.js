document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('openBtn');
  const music = document.getElementById('music');

  if (btn && music) {
    btn.addEventListener('click', function() {
      // Perintah memutar musik
      music.play().catch(function(error) {
        console.log("Autoplay ditahan browser:", error);
      });
    });
  }
});
