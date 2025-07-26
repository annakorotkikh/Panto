const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

for (let btn of infoBtns) {
  btn.addEventListener('click', showHint);
}

function showHint(event) {
  event.stopPropagation();
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
  this.parentNode.querySelector('.info-hint').classList.toggle('none');
}

document.addEventListener('click', closeHint);

function closeHint() {
  for (let hint of infoHints) {
    hint.classList.add('none');
  }
}

for (let hint of infoHints) {
  hint.addEventListener('click', (event) => event.stopPropagation());
}

//Swiper
const swiper = new Swiper('.swiper', {
  // direction: 'vertical',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 42,
  // freeMode: true,

  breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1124: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    1440: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },

  navigation: {
    nextEl: '#sliderNext',
    prevEl: '#sliderPrev',
  },
});

//Tabs
const tabBtns = document.querySelectorAll('[data-tab]');
const tabProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {
  btn.addEventListener('click', function () {
    for (let btn of tabBtns) {
      btn.classList.remove('tab-controls__btn--active');
    }
    this.classList.add('tab-controls__btn--active');

    for (let product of tabProducts) {
      if (this.dataset.tab === 'all') {
        product.classList.remove('none')
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none')
        } else {
          product.classList.add('none')
        }
      }
    }

    swiper.update()
  })
}

//Mobile-nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add('mobile-nav-wrapper--open');
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove('mobile-nav-wrapper--open');
}