// ---------- Menu ----------

function checkWindowSize() {
  if (window.innerWidth > 480) {
    document.getElementById('navbar').style.display = 'flex';
    document.body.style.overflow = 'auto';
  } else {
    document.getElementById('navbar').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

document.addEventListener('DOMContentLoaded', checkWindowSize);

window.addEventListener('resize', checkWindowSize);

document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('navbar').style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('navbar').style.display = 'none';
  document.body.style.overflow = 'auto';
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
