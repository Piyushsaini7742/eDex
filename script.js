(function () {
  const cardWrapper = document.getElementById("cardWrapper");
  const dotsContainer = document.getElementById("dotsContainer");

  let dotCount = Math.ceil(cardWrapper.scrollWidth / cardWrapper.clientWidth);
  let dots = [];

  const updateDots = () => {
    const activeIndex = Math.round(cardWrapper.scrollLeft / cardWrapper.clientWidth);
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === activeIndex);
    });
  };

  const createDots = () => {
    dotsContainer.innerHTML = "";
    dots = [];
    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        cardWrapper.scrollLeft = i * cardWrapper.clientWidth;
      });
      dots.push(dot);
      dotsContainer.appendChild(dot);
    }
  };

  cardWrapper.addEventListener("scroll", updateDots);
  window.addEventListener("resize", createDots);

  createDots();
})();

const container = document.getElementById('cardsContainer');
const dotsContainer = document.getElementById('dotsContainer');
const totalCards = document.querySelectorAll('.card').length;
const visibleCards = 3;
let currentIndex = 0;

function createDots() {
  for (let i = 0; i < Math.ceil(totalCards / visibleCards); i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
  }
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === Math.floor(currentIndex / visibleCards));
  });
}

function scrollCards(direction) {
  const cardWidth = document.querySelector('.card').offsetWidth + 20;
  const maxIndex = totalCards - visibleCards;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  updateDots();
}

createDots();

function scrollLeft() {
  const carousel = document.querySelector('.n3');
  carousel.scrollBy({
    top: 0,
    left: -300,
    behavior: 'smooth'
  });
}

function scrollRight() {
  const carousel = document.querySelector('.n3');
  carousel.scrollBy({
    top: 0,
    left: 300,
    behavior: 'smooth'
  });
}