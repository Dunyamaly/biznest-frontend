document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput')
  const categoryFilter = document.getElementById('categoryFilter')
  const shopTypeFilter = document.getElementById('shopTypeFilter')
  const locationFilter = document.getElementById('locationFilter')
  const sortFilter = document.getElementById('sortFilter')
  const serviceCards = document.querySelectorAll('.service-card')

  // --- Live search və filter funksiyası ---
  function filterServices() {
    const searchValue = searchInput.value.toLowerCase()
    const categoryValue = categoryFilter.value.toLowerCase()
    const shopTypeValue = shopTypeFilter.value.toLowerCase()
    const locationValue = locationFilter.value.toLowerCase()
    const sortValue = sortFilter.value

    serviceCards.forEach((card) => {
      const name = card.querySelector('.service-card-name').textContent.toLowerCase()
      const category = card.dataset.category ? card.dataset.category.toLowerCase() : ''
      const shopType = card.dataset.shopType ? card.dataset.shopType.toLowerCase() : ''
      const location = card.dataset.location ? card.dataset.location.toLowerCase() : ''

      let matches = true

      if (searchValue && !name.includes(searchValue)) matches = false
      if (categoryValue && categoryValue !== '' && category !== categoryValue) matches = false
      if (shopTypeValue && shopTypeValue !== '' && shopType !== shopTypeValue) matches = false
      if (locationValue && locationValue !== '' && location !== locationValue) matches = false

      card.style.display = matches ? 'block' : 'none'
    })

    // Sort by newest/oldest (əgər data-created atributu varsa)
    if (sortValue) {
      const parent = document.querySelector('.service-list')
      const cardsArray = Array.from(serviceCards).filter((c) => c.style.display !== 'none')

      cardsArray.sort((a, b) => {
        const dateA = new Date(a.dataset.created)
        const dateB = new Date(b.dataset.created)
        return sortValue === 'Ən yeni' ? dateB - dateA : dateA - dateB
      })

      cardsArray.forEach((c) => parent.appendChild(c))
    }
  }

  // Event listener-lər
  searchInput.addEventListener('input', filterServices)
  categoryFilter.addEventListener('change', filterServices)
  shopTypeFilter.addEventListener('change', filterServices)
  locationFilter.addEventListener('change', filterServices)
  sortFilter.addEventListener('change', filterServices)

  // --- Şəkil hover funksiyası ---
  serviceCards.forEach((card) => {
    const images = card.querySelectorAll('.service-card-images img')
    const indicatorsContainer = card.querySelector('.image-indicators')

    // İndikatorları yarat
    images.forEach((_, idx) => {
      const span = document.createElement('span')
      if (idx === 0) span.classList.add('active')
      indicatorsContainer.appendChild(span)
    })

    let currentIndex = 0
    card.querySelector('.service-card-images').addEventListener('mouseenter', () => {
      images.forEach((img) => (img.style.opacity = 0))
      images[0].style.opacity = 1
      currentIndex = 0
      updateIndicators()
    })

    card.querySelector('.service-card-images').addEventListener('mousemove', (e) => {
      const width = card.querySelector('.service-card-images').offsetWidth
      const relativeX = e.offsetX
      const index = Math.floor(relativeX / (width / images.length))
      if (index !== currentIndex) {
        images.forEach((img) => (img.style.opacity = 0))
        images[index].style.opacity = 1
        currentIndex = index
        updateIndicators()
      }
    })

    function updateIndicators() {
      const spans = indicatorsContainer.querySelectorAll('span')
      spans.forEach((s, i) => s.classList.toggle('active', i === currentIndex))
    }
  })
})
