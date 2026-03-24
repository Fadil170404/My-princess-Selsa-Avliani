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


// --- BAGIAN 2: Logika Musik (Tambahan) ---
const openBtn = document.getElementById('openBtn');
const audio = document.getElementById('myAudio');

if (openBtn && audio) {
  openBtn.addEventListener('click', function(e) {
    // Putar lagu romantic.mp3
    audio.play().then(() => {
        console.log("Musik jalan!");
    }).catch(err => {
        console.log("Autoplay diblokir, tapi lagu akan tetap dicoba putar.");
    });

    // Beri jeda 0.5 detik agar telinga user sempat dengar intro lagunya
    // baru kemudian pindah ke halaman flower.html
    e.preventDefault(); 
    const target = this.getAttribute('href');
    setTimeout(() => {
      window.location.href = target;
    }, 500);
  });
}
