
  const cards = document.querySelectorAll('.card');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let index = 0; 

    function updateCarousel() {
      cards.forEach((card, i) => {
        card.classList.remove('left', 'center', 'right', 'hidden');
      });

      const leftIndex = (index - 1 + cards.length) % cards.length;
      const rightIndex = (index + 1) % cards.length;

      cards[index].classList.add('center');
      cards[leftIndex].classList.add('left');
      cards[rightIndex].classList.add('right');

      cards.forEach((card, i) => {
        if (![index, leftIndex, rightIndex].includes(i)) {
          card.classList.add('hidden');
        }
      });
    }

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % cards.length;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + cards.length) % cards.length;
      updateCarousel();
    });

    updateCarousel(); 