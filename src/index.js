// ---------- Menu ----------

// Отримання стану меню з localStorage або встановлення за замовчуванням на false
let isMenuOpen = localStorage.getItem('isMenuOpen') === 'true';

function checkWindowSize() {
  if (window.innerWidth > 480) {
    // На великих екранах завжди показувати меню
    document.getElementById('navbar').style.display = 'flex';
    document.body.style.overflow = 'auto';
  } else {
    // На малих екранах відображення меню залежить від isMenuOpen
    document.getElementById('navbar').style.display = isMenuOpen ? 'flex' : 'none';
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  checkWindowSize(); // Перевірка при завантаженні
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('navbar').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    isMenuOpen = true;
    localStorage.setItem('isMenuOpen', 'true'); // Збереження стану в localStorage
  });

  document.getElementById('close-menu').addEventListener('click', function () {
    document.getElementById('navbar').style.display = 'none';
    document.body.style.overflow = 'auto';
    isMenuOpen = false;
    localStorage.setItem('isMenuOpen', 'false'); // Збереження стану в localStorage
  });
});

window.addEventListener('resize', function() {
  checkWindowSize(); // Перевірка при зміні розміру вікна
});

// ---------- Slider ----------

document.addEventListener('DOMContentLoaded', function () {
  const imagesContainer = document.querySelector('.slider__images');
  const slides = imagesContainer.children;
  const totalSlides = slides.length;
  const currentSlideElement = document.getElementById('current-slide');
  const totalSlidesElement = document.getElementById('total-slides');
  let currentSlideIndex = 0;

  totalSlidesElement.textContent = totalSlides;
  currentSlideElement.textContent = currentSlideIndex + 1;

  function updateSlide(index) {
    Array.from(slides).forEach((slide, idx) => {
      slide.style.display = idx === index ? 'block' : 'none';
    });
    currentSlideElement.textContent = index + 1;
  }

  document.getElementById('prev-slide').addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    updateSlide(currentSlideIndex);
  });

  document.getElementById('next-slide').addEventListener('click', function () {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    updateSlide(currentSlideIndex);
  });

  Array.from(document.querySelectorAll('.slider__item__btn')).forEach(
    (button) => {
      button.addEventListener('click', function () {
        const detailsDiv = button.nextElementSibling;
        const isVisible = detailsDiv.style.display === 'block';
        detailsDiv.style.display = isVisible ? 'none' : 'block';
      });
    }
  );
});

// ---------- Form ----------

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!phone || !email || !message) {
      alert('Будь ласка, заповніть всі поля.');
    } else {
      console.log('Form submitted', { phone, email, message });
      alert('Форма відправлена!');
    }
  });
