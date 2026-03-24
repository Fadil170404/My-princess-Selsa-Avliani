// --- BAGIAN 1: Animasi Teks Kamu (Tetap Dipertahankan) ---
const title = document.querySelector('.title')
const text = `I Have Something`.split('')

title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});


// --- GANTI BAGIAN LOGIKA MUSIK DENGAN INI ---
const openBtn = document.getElementById('openBtn');
const audio = document.getElementById('myAudio');

if (openBtn && audio) {
  openBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Berhenti dulu, jangan pindah halaman
    
    const target = this.getAttribute('href');

    // Cek apakah file musik bisa dimuat
    audio.play().then(() => {
      console.log("Berhasil putar!");
      setTimeout(() => {
        window.location.href = target;
      }, 700); // Jeda biar lagu kedengeran dulu
    }).catch(err => {
      console.error("Gagal putar: ", err);
      // Kalau gagal, kita tetap pindah halaman biar gak macet
      window.location.href = target;
    });
  });
}
