// premium-cards.js

document.addEventListener('DOMContentLoaded', () => {
  /* ===============================
     IMAGE HOVER (HAMISI ÜÇÜN)
  =============================== */
  function setupImageHover(container) {
    if (!container) return

    const images = container.querySelectorAll('img')
    const indicators = container.querySelector('.image-indicators')
    if (!images.length || !indicators) return

    indicators.innerHTML = ''

    images.forEach((_, i) => {
      const dot = document.createElement('span')
      if (i === 0) dot.classList.add('active')
      indicators.appendChild(dot)
    })

    const dots = indicators.querySelectorAll('span')
    images.forEach((img, i) => (img.style.opacity = i === 0 ? 1 : 0))

    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      const index = Math.floor(((e.clientX - rect.left) / rect.width) * images.length)

      images.forEach((img) => (img.style.opacity = 0))
      dots.forEach((d) => d.classList.remove('active'))

      images[Math.min(index, images.length - 1)].style.opacity = 1
      dots[Math.min(index, dots.length - 1)].classList.add('active')
    })

    container.addEventListener('mouseleave', () => {
      images.forEach((img) => (img.style.opacity = 0))
      dots.forEach((d) => d.classList.remove('active'))
      images[0].style.opacity = 1
      dots[0].classList.add('active')
    })
  }

  document.querySelectorAll('.premium-card-images').forEach(setupImageHover)

  /* ===============================
     PREMIUM SAĞ OX SCROLL
  =============================== */
  const premiumList = document.querySelector('.premium-cards-lists')
  const scrollBtn = document.querySelector('.saga-ox i')

  if (scrollBtn && premiumList) {
    scrollBtn.addEventListener('click', () => {
      premiumList.scrollBy({ left: 280, behavior: 'smooth' })
    })
  }

  /* ===============================
     DAHA ÇOX GÖSTƏR (CLONE)
  =============================== */
  const loadMoreBtn = document.querySelector('.other-mix-card-button')
  const list = document.querySelector('.mix-card-list')

  if (loadMoreBtn && list) {
    loadMoreBtn.addEventListener('click', () => {
      loadMoreBtn.classList.add('loading')
      loadMoreBtn.innerHTML = 'Yüklənir...'

      setTimeout(() => {
        const cards = list.querySelectorAll('.mix-card')
        const fragment = document.createDocumentFragment()

        cards.forEach((card) => {
          const clone = card.cloneNode(true)
          fragment.appendChild(clone)
          setupImageHover(clone.querySelector('.premium-card-images'))
        })

        list.appendChild(fragment)

        loadMoreBtn.classList.remove('loading')
        loadMoreBtn.innerHTML = 'Daha Çox Göstər <i class="fa-solid fa-angle-down"></i>'
      }, 700)
    })
  }
})
