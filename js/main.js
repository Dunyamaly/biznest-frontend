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
const saleCards2 = document.querySelector('.premium-cards-lists')

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
// document.querySelectorAll('.premium-card-images').forEach((container) => {
//   const images = container.querySelectorAll('img')
//   const indicatorsContainer = container.querySelector('.image-indicators')
//   const count = images.length

//   // indikatorları yarat
//   images.forEach((_, i) => {
//     const span = document.createElement('span')
//     if (i === 0) span.classList.add('active')
//     indicatorsContainer.appendChild(span)
//   })

//   const indicators = indicatorsContainer.querySelectorAll('span')

//   container.addEventListener('mousemove', (e) => {
//     const rect = container.getBoundingClientRect()
//     const x = e.clientX - rect.left
//     const zoneWidth = rect.width / count
//     const index = Math.min(count - 1, Math.floor(x / zoneWidth))

//     images.forEach((img) => (img.style.opacity = 0))
//     indicators.forEach((ind) => ind.classList.remove('active'))

//     images[index].style.opacity = 1
//     indicators[index].classList.add('active')
//   })

//   container.addEventListener('mouseleave', () => {
//     images.forEach((img) => (img.style.opacity = 0))
//     indicators.forEach((ind) => ind.classList.remove('active'))

//     images[0].style.opacity = 1
//     indicators[0].classList.add('active')
//   })
// })

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

document.querySelectorAll('.premium-card-animation').forEach((meta) => {
  const views = meta.querySelector('.pr-card-animation_1')
  const time = meta.querySelector('.pr-card-animation_2')

  const duration = 6
  const offset = Math.random() * duration * -1

  views.style.animationDelay = `${offset}s`
  time.style.animationDelay = `${offset}s`
})

// ===========================================================
// const loadMoreBtn = document.querySelector('.other-mix-card-button')
// const listings = document.querySelector('.mix-card-list')

// loadMoreBtn.addEventListener('click', () => {
//   loadMoreBtn.classList.add('loading')
//   loadMoreBtn.innerHTML = 'Yüklənir…'

//   setTimeout(() => {
//     for (let i = 0; i < 12; i++) {
//       const card = document.createElement('div')
//       card.className = 'card'
//       card.innerHTML = `
//         <div class="mix-card">
//           <div class="premium-card-images">
//             <div class="icons">
//               <i class="fa-solid fa-truck"></i>
//               <i class="fa-solid fa-percent"></i>
//             </div>
//             <div class="image-indicators"></div>
//             <img src="https://picsum.photos/800/400?random=3" alt="Thumbnail 3" />
//             <img src="https://picsum.photos/800/400?random=4" alt="Thumbnail 3" />
//             <img src="https://picsum.photos/800/400?random=5" alt="Thumbnail 3" />
//             <img src="https://picsum.photos/800/400?random=6" alt="Thumbnail 3" />
//           </div>
//           <div class="card-body">
//             <a href="">
//               <p class="product-name">TNCE Smart Plug Zigbee 3.0 və ya Wi-Fi</p>
//               <p><span class="old-price">46.97</span><span class="discount">-50%</span></p>
//               <p class="price">23.49 AZN</p>
//               <p class="views">👁 120 baxış</p>
//             </a>
//           </div>
//         </div>
//       `
//       listings.appendChild(card)
//     }

//     loadMoreBtn.classList.remove('loading')
//     loadMoreBtn.innerHTML = 'Daha Çox Göstər <i class="fa-solid fa-angle-down"></i>'
//   }, 1200)
// })

// ===========================================================

const loadMoreBtn = document.querySelector('.other-mix-card-button')
const listings = document.querySelector('.mix-card-list')

// Məhsul adları siyahısı
const productNames = [
  'TNCE Smart Plug Zigbee 3.0',
  'Xiaomi Aqilli Şamdan',
  'Philips LED Lampa',
  'Smart Wi-Fi Kamera',
  'Bluetooth Qulaqlıq',
  'Ev Robot Tozsoran',
  'Portativ Powerbank',
  'Smart Saat',
]

// Random integer funksiyası
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Kartın HTML-nı random yaratmaq üçün funksiya
function generateRandomCardHTML() {
  const name = productNames[getRandomInt(0, productNames.length - 1)]
  const oldPrice = getRandomInt(20, 100)
  const discount = getRandomInt(10, 70)
  const newPrice = ((oldPrice * (100 - discount)) / 100).toFixed(2)
  const views = getRandomInt(50, 500)

  return `
    <div class="premium-card-images">
      <div class="icons">
        <i class="fa-solid fa-truck"></i>
        <i class="fa-solid fa-percent"></i>
      </div>
      <div class="image-indicators"></div>
      <img src="https://picsum.photos/800/400?random=${getRandomInt(1, 1000)}" alt="Thumbnail" />
      <img src="https://picsum.photos/800/400?random=${getRandomInt(1001, 2000)}" alt="Thumbnail" />
      <img src="https://picsum.photos/800/400?random=${getRandomInt(2001, 3000)}" alt="Thumbnail" />
      <img src="https://picsum.photos/800/400?random=${getRandomInt(3001, 4000)}" alt="Thumbnail" />
    </div>
    <div class="card-body">
    <div class="basket-icon">
              <button><i class="fa-solid fa-cart-plus"></i></button>
            </div>
      <a href="">
        <p class="product-name">${name}</p>
        <p><span class="old-price">${oldPrice}</span><span class="discount">-${discount}%</span></p>
        <p class="price">${newPrice} AZN</p>
        <p class="views">👁 ${views} baxış</p>
      </a>
    </div>
  `
}

// Hover və indikator funksiyası
function setupImageHover(container) {
  const images = container.querySelectorAll('img')
  const indicatorsContainer = container.querySelector('.image-indicators')
  indicatorsContainer.innerHTML = ''
  const count = images.length

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

  // İlk görüntü göstərilsin
  images.forEach((img) => (img.style.opacity = 0))
  images[0].style.opacity = 1
}

// Mövcud kartlar üçün hover funksiyasını aktiv et
document.querySelectorAll('.premium-card-images').forEach(setupImageHover)

// “Daha Çox Göstər” düyməsi
loadMoreBtn.addEventListener('click', () => {
  loadMoreBtn.classList.add('loading')
  loadMoreBtn.innerHTML = 'Yüklənir…'

  setTimeout(() => {
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < 12; i++) {
      const card = document.createElement('div')
      card.className = 'mix-card'
      card.innerHTML = generateRandomCardHTML()
      fragment.appendChild(card)
    }

    listings.appendChild(fragment)

    // Yeni yüklənən kartlar üçün hover funksiyasını əlavə et
    listings.querySelectorAll('.premium-card-images:not([data-hovered])').forEach((container) => {
      setupImageHover(container)
      container.dataset.hovered = true
    })

    loadMoreBtn.classList.remove('loading')
    loadMoreBtn.innerHTML = 'Daha Çox Göstər <i class="fa-solid fa-angle-down"></i>'
  }, 1200)
})

// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
// ===========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const saleCards = document.querySelector('.sale-cards')
  const seeAllCard = saleCards.querySelector('.see-all-card')

  const productNames = [
    'TNCE Smart Plug Zigbee 3.0',
    'Xiaomi Ağıllı Lampa',
    'Philips LED Panel',
    'Wi-Fi Təhlükəsizlik Kamerası',
    'Bluetooth Qulaqlıq',
    'Ağıllı Rozet',
    'Smart Saat',
    'Portativ Powerbank',
    'Robot Tozsoran',
    'USB Şarj Cihazı',
  ]

  function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function getRandomIconsHTML() {
    const random = rand(0, 3)
    let icons = ''

    if (random === 1) icons = `<i class="fa-solid fa-truck"></i>`
    if (random === 2) icons = `<i class="fa-solid fa-percent"></i>`
    if (random === 3)
      icons = `
        <i class="fa-solid fa-truck"></i>
        <i class="fa-solid fa-percent"></i>
      `

    return icons
  }

  function createRandomCard() {
    const name = productNames[rand(0, productNames.length - 1)]
    const oldPrice = rand(30, 150)
    const discount = rand(10, 70)
    const newPrice = ((oldPrice * (100 - discount)) / 100).toFixed(2)
    const imgId = rand(1, 1000)

    const card = document.createElement('div')
    card.className = 'card'

    card.innerHTML = `
      <div class="product-img">
        <div class="icons">
          ${getRandomIconsHTML()}
        </div>
        <img src="https://picsum.photos/400/400?random=${imgId}" alt="Məhsul" />
      </div>

      <div class="card-body">
        <div class="basket-icon">
          <button><i class="fa-solid fa-cart-plus"></i></button>
        </div>
        <a href="" target="_blank">
          <p>
            <span class="old-price">${oldPrice}</span>
            <span class="discount">-${discount}%</span>
          </p>
          <p class="price">${newPrice} AZN</p>
          <p class="product-name">${name}</p>
        </a>
      </div>
    `

    return card
  }

  // 🟢 Səhifə açılanda 30 kart əlavə et
  for (let i = 0; i < 30; i++) {
    saleCards.insertBefore(createRandomCard(), seeAllCard)
  }
})
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
// =================================================================================
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.premium-cards-lists')
  const template = document.querySelector('.premium-card:not(.a7)')

  // template kartı saxla, sonra sil
  const baseCard = template.cloneNode(true)
  template.remove()

  const names = [
    'TNCE Smart Plug Zigbee 3.0',
    'Apple AirPods Pro',
    'Samsung Galaxy Watch 6',
    'Xiaomi Mi Band 8',
    'Logitech MX Master 3',
    'Anker Fast Charger 65W',
    'Sony WH-1000XM5',
    'Baseus Powerbank 20000mAh',
    'Philips Air Fryer XL',
    'JBL Flip 6 Bluetooth Speaker',
  ]

  function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  function randomPrice() {
    const oldPrice = (Math.random() * 300 + 40).toFixed(2)
    const discount = [10, 20, 30, 40, 50][Math.floor(Math.random() * 5)]
    const newPrice = (oldPrice * (1 - discount / 100)).toFixed(2)

    return { oldPrice, discount, newPrice }
  }

  function randomViews() {
    return Math.floor(Math.random() * 5000 + 50)
  }

  function randomTime() {
    const d = Math.floor(Math.random() * 7)
    const h = Math.floor(Math.random() * 24)
      .toString()
      .padStart(2, '0')
    const m = Math.floor(Math.random() * 60)
      .toString()
      .padStart(2, '0')

    if (d === 0) return `Bu gün ${h}:${m}`
    if (d === 1) return `Dünən ${h}:${m}`
    return `${d} gün əvvəl ${h}:${m}`
  }

  for (let i = 0; i < 30; i++) {
    const card = baseCard.cloneNode(true)

    /* ===== TEXT ===== */
    card.querySelector('.premium-card-name').textContent = rand(names)

    const price = randomPrice()
    card.querySelector('.premium-card-old-price').textContent = price.oldPrice
    card.querySelector('.premium-card-discount').textContent = `-${price.discount}%`
    card.querySelector('.premium-card-new-price').textContent = `${price.newPrice} AZN`

    card.querySelector('.pr-card-animation_1').textContent = `👁 ${randomViews()} baxış`
    card.querySelector('.pr-card-animation_2').textContent = randomTime()

    /* ===== IMAGES ===== */
    const imgs = card.querySelectorAll('.premium-card-images img')
    const start = Math.floor(Math.random() * 500)

    imgs.forEach((img, index) => {
      img.src = `https://picsum.photos/800/400?random=${start + index}`
    })

    list.insertBefore(card, list.querySelector('.a7'))
  }
})
