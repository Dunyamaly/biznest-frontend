document.addEventListener('DOMContentLoaded', () => {
  const shopList = document.querySelector('.shop-list')

  // Filter elementləri
  const categoryFilter = document.getElementById('categoryFilter')
  const addressCheckboxes = document.querySelectorAll(
    ".filter-group.address input[type='checkbox']"
  )
  const discountCheckbox = document.querySelector("input[data-filter='discount']")
  const premiumCheckbox = document.querySelector("input[data-filter='premium']")
  const sortFilter = document.getElementById('sortFilter')

  // Bütün kartlar
  let cards = Array.from(shopList.querySelectorAll('.advertising-card'))

  // --- Live filter + sort funksiyası ---
  function filterAndSort() {
    const selectedCategory = categoryFilter.value
    let selectedLocations = Array.from(addressCheckboxes)
      .filter((ch) => ch.checked)
      .map((ch) => ch.dataset.location)

    // "Hamısı" seçilibsə bütün lokasiyalar daxil sayılsın
    const allLocationsChecked = selectedLocations.includes('Hamısı')
    if (allLocationsChecked) selectedLocations = [] // boş array → hamısı görünəcək

    const discount = discountCheckbox.checked
    const premium = premiumCheckbox.checked
    const sortBy = sortFilter.value

    const query = navSearchInput.value.trim().toLowerCase()

    // Filter
    let visibleCards = cards.filter((card) => {
      const cardCategory = card.dataset.category
      const cardLocation = card.dataset.location
      const cardDiscount = card.dataset.discount === 'true'
      const cardPremium = card.dataset.premium === 'true'
      const cardName = card.querySelector('.advertising-card-name').textContent.toLowerCase()

      let match = true

      // Category + Location
      if (selectedCategory && cardCategory !== selectedCategory) match = false
      if (selectedLocations.length > 0 && !selectedLocations.includes(cardLocation)) match = false

      // Discount + Premium
      if (discount && !cardDiscount) match = false
      if (premium && !cardPremium) match = false

      // Search input
      if (query && !cardName.includes(query)) match = false

      card.style.display = match ? 'block' : 'none'
      return match
    })

    // --- Sort ---
    if (sortBy === 'newest') {
      visibleCards.sort(
        (a, b) => new Date(b.dataset.created || 0) - new Date(a.dataset.created || 0)
      )
    } else if (sortBy === 'price-asc') {
      visibleCards.sort(
        (a, b) => parseFloat(a.dataset.price || 0) - parseFloat(b.dataset.price || 0)
      )
    } else if (sortBy === 'price-desc') {
      visibleCards.sort(
        (a, b) => parseFloat(b.dataset.price || 0) - parseFloat(a.dataset.price || 0)
      )
    }

    // Append
    visibleCards.forEach((c) => shopList.appendChild(c))
  }

  // --- Event listeners ---
  categoryFilter.addEventListener('change', filterAndSort)
  addressCheckboxes.forEach((ch) => ch.addEventListener('change', filterAndSort))
  discountCheckbox.addEventListener('change', filterAndSort)
  premiumCheckbox.addEventListener('change', filterAndSort)
  sortFilter.addEventListener('change', filterAndSort)

  // --- Navbar search input ---
  const navSearchInput = document.querySelector(".nav-search input[name='search']")
  navSearchInput.addEventListener('input', filterAndSort)

  // --- İlk yükdə filter tətbiq et ---
  filterAndSort()

  // --- Navbar search button ---
  const navSearchBtn = document.querySelector('.nav-search .search-btn')
  navSearchBtn.addEventListener('click', () => {
    const query = navSearchInput.value.trim()
    if (query) window.location.href = `listing.html?q=${encodeURIComponent(query)}`
  })

  // --- URL-based search ---
  const urlParams = new URLSearchParams(window.location.search)
  const q = urlParams.get('q')
  if (q) {
    navSearchInput.value = q
    filterAndSort()
  }
})
