window.onload = () => {
  // Menghilangkan class "not-loaded" setelah 1 detik
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const text = 'I Love UUU My Princess Selsa Avliani ❤️️';
    const titles = text.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        // Delay 300ms per huruf agar tidak terlalu lambat
        setTimeout(appendTitle, 300); 
      }
    }

    appendTitle();
  }, 1000);
};
