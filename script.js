let bottom = document.querySelector('.main__bottom-link')
let items = document.querySelectorAll('.link-row__item_hidden')
let icon = document.querySelector('.main__bottom-img')



let clickShow = function (item, bottom, icon) {
   bottom.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (item.classList.contains('link-row__item_hidden')) {
         item.classList.remove('link-row__item_hidden')
         item.classList.add('link-row__item_visible')
         icon.classList.remove('main__bottom-img_rotate')
         bottom.textContent = 'Скрыть'
      } else if (item.classList.contains('link-row__item_visible')) {
         item.classList.add('link-row__item_hidden')
         item.classList.remove('link-row__item_visible')
         bottom.textContent = 'Показать все'
         icon.classList.add('main__bottom-img_rotate')
      }
   })
}

for (let i = 0; i < items.length; i++) {
   clickShow(items[i], bottom, icon)
}

let itemsHiddenMobile = document.querySelectorAll('.link-row__item_hidden-mobile')

let clickShowMobile = function (item, bottom, icon) {
   bottom.addEventListener('click', function (evt) {
      evt.preventDefault()
      if (item.classList.contains('link-row__item_hidden-mobile')) {
         item.classList.remove('link-row__item_hidden-mobile')
         item.classList.add('link-row__item_visible-mobile')
         icon.classList.remove('main__bottom-img_rotate')
         bottom.textContent = 'Скрыть'
      } else if (item.classList.contains('link-row__item_visible-mobile')) {
         item.classList.add('link-row__item_hidden-mobile')
         item.classList.remove('link-row__item_visible-mobile')
         bottom.textContent = 'Показать все'
         icon.classList.add('main__bottom-img_rotate')
      }
   })
}


for (let i = 0; i < itemsHiddenMobile.length; i++) {
   clickShowMobile(itemsHiddenMobile[i], bottom, icon)
}

const slider = document.querySelector('.slider-container');

let mySwiper;

function mobileSlider() {
   if (window.innerWidth < 700 && slider.dataset.mobile == 'false') {
      mySwiper = new Swiper(slider, {
         spaceBetween: 16,
         slideClass: 'link-row__item',
         loop: true,
         pagination: {
            el: '.swiper-pagination',
         },
      });

      slider.dataset.mobile = 'true';
   }

   if (window.innerWidth > 700) {
      slider.dataset.mobile = 'false';
      if (slider.classList.contains('swiper-container-initialized')) {
         mySwiper.destroy();
      }
   }
}

mobileSlider()

window.addEventListener('resize', () => {
   mobileSlider();
});






