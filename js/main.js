const searchInput = document.querySelector('.nav-search input')
const searchBtn = document.querySelector('.search-btn')

searchInput.addEventListener('input', function () {
  if (this.value.trim() !== '') {
    searchBtn.classList.add('active')
  } else {
    searchBtn.classList.remove('active')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const dotsContainer = document.querySelector('.dots-container')

  let currentIndex = 0
  let interval

  // İlk slide aktiv
  slides[0].classList.add('active')

  // DOTLAR
  slides.forEach((_, index) => {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    if (index === 0) dot.classList.add('active')

    dot.addEventListener('click', () => showSlide(index))
    dotsContainer.appendChild(dot)
  })

  const dots = document.querySelectorAll('.dot')

  function showSlide(index) {
    slides[currentIndex].classList.remove('active')
    dots[currentIndex].classList.remove('active')

    currentIndex = (index + slides.length) % slides.length

    slides[currentIndex].classList.add('active')
    dots[currentIndex].classList.add('active')

    resetAuto()
  }

  function nextSlide() {
    showSlide(currentIndex + 1)
  }

  function prevSlide() {
    showSlide(currentIndex - 1)
  }

  prevBtn.addEventListener('click', prevSlide)
  nextBtn.addEventListener('click', nextSlide)

  function startAuto() {
    interval = setInterval(nextSlide, 6000)
  }

  function resetAuto() {
    clearInterval(interval)
    startAuto()
  }

  startAuto()
})

const scrollBtn = document.querySelector('.right-ox i')
const saleCards = document.querySelector('.sale-cards')

scrollBtn.addEventListener('click', () => {
  saleCards.scrollBy({ left: 200, behavior: 'smooth' })
})
// ====================================================================
const scrollBtn2 = document.querySelector('.saga-ox i')
const saleCards2 = document.querySelector('.rating-cards')

scrollBtn2.addEventListener('click', () => {
  saleCards2.scrollBy({ left: 200, behavior: 'smooth' })
})

const btn = document.querySelector('.category-right-button')
const container = document.querySelector('.categories')
btn.addEventListener('click', () => {
  container.scrollBy({ left: 150, behavior: 'smooth' })
})

const homePageGo = document.getElementById('homePageGo')
const minScroll = 0
const duration = 200
function easeOutQuad(t) {
  return t * (2 - t)
}
window.addEventListener('scroll', () => {
  if (window.scrollY > minScroll) {
    homePageGo.style.display = 'flex'
  } else {
    homePageGo.style.display = 'none'
  }
})
homePageGo.addEventListener('click', () => {
  const start = window.scrollY
  const end = minScroll
  const distance = start - end
  const startTime = performance.now()

  function step(currentTime) {
    let t = Math.min((currentTime - startTime) / duration, 1)
    t = easeOutQuad(t)
    window.scrollTo(0, start - distance * t)
    if (t < 1) {
      requestAnimationFrame(step)
    }
  }

  requestAnimationFrame(step)
})
// ====================================================================
document.querySelectorAll('.listing-img').forEach((container) => {
  const images = container.querySelectorAll('img')
  const indicatorsContainer = container.querySelector('.image-indicators')
  const count = images.length

  // indikatorları yarat
  images.forEach((_, i) => {
    const span = document.createElement('span')
    if (i === 0) span.classList.add('active')
    indicatorsContainer.appendChild(span)
  })

  const indicators = indicatorsContainer.querySelectorAll('span')

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const zoneWidth = rect.width / count
    const index = Math.min(count - 1, Math.floor(x / zoneWidth))

    images.forEach((img) => (img.style.opacity = 0))
    indicators.forEach((ind) => ind.classList.remove('active'))

    images[index].style.opacity = 1
    indicators[index].classList.add('active')
  })

  container.addEventListener('mouseleave', () => {
    images.forEach((img) => (img.style.opacity = 0))
    indicators.forEach((ind) => ind.classList.remove('active'))

    images[0].style.opacity = 1
    indicators[0].classList.add('active')
  })
})

// ======================================================

let lastScroll = 0
const nav = document.querySelector('nav')

// səhifə açılan kimi görünsün
window.addEventListener('load', () => {
  nav.classList.add('show')
})

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  // yuxarı scroll → göstər
  if (currentScroll < lastScroll) {
    nav.classList.add('show')
  }

  // aşağı scroll → gizlət
  if (currentScroll > lastScroll) {
    nav.classList.remove('show')
  }

  lastScroll = currentScroll
})

// ============================================================

document.querySelectorAll('.listing-meta').forEach((meta) => {
  const views = meta.querySelector('.listing-views')
  const time = meta.querySelector('.update-time')

  const duration = 6
  const offset = Math.random() * duration * -1

  views.style.animationDelay = `${offset}s`
  time.style.animationDelay = `${offset}s`
})

// ===========================================================
const loadMoreBtn = document.querySelector('.list-card-add')
const listings = document.querySelector('.listings-cards')

loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.classList.add('loading')
  loadMoreBtn.innerHTML = 'Yüklənir…'

  setTimeout(() => {
    for (let i = 0; i < 12; i++) {
      const card = document.createElement('div')
      card.className = 'card'
      card.innerHTML = `
        <div class="listing-card">
          <div class="listing-img">
            <div class="image-indicators"></div>
            <img src="https://picsum.photos/800/400?random=5" />
            <img src="https://picsum.photos/800/400?random=6" />
            <img src="https://picsum.photos/800/400?random=7" />
            <img src="https://picsum.photos/800/400?random=8" />
          </div>
          <div class="listing-details">
            <a href="#">
              <p class="listing-title">TNCE Smart Plug Zigbee 3.0 və ya Wi-Fi</p>
              <p class="listing-prices">
                <span class="listing-old-price">46.97</span>
                <span class="listing-discount">-50%</span>
              </p>
              <p class="listing-price">23.49 AZN</p>
              <p class="listing-meta">
                <span class="listing-views">👁 120 baxış</span>
                <span class="update-time">Bu gün 20:48</span>
              </p>
            </a>
          </div>
        </div>
      `
      listings.appendChild(card) // ✅ DÜZGÜN
    }

    loadMoreBtn.classList.remove('loading')
    loadMoreBtn.innerHTML = 'Daha Çox Göstər <i class="fa-solid fa-angle-down"></i>'
  }, 1200)
})

// ===========================================================
