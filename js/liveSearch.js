document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput')
  const shopList = document.querySelector('.shop-list')

  const categoryFilter = document.getElementById('categoryFilter')
  const shopTypeFilter = document.getElementById('shopTypeFilter')
  const locationFilter = document.getElementById('locationFilter')
  const sortFilter = document.getElementById('sortFilter')

  const shopCards = Array.from(document.querySelectorAll('.shop-card'))

  function updateShops() {
    const search = searchInput.value.toLowerCase()
    const category = categoryFilter.value
    const type = shopTypeFilter.value
    const location = locationFilter.value.toLowerCase()
    const sort = sortFilter.value

    let filtered = shopCards.filter((card) => {
      const name = card.dataset.name.toLowerCase()
      const c = card.dataset.category
      const t = card.dataset.type
      const l = card.dataset.location.toLowerCase()

      return (
        name.includes(search) &&
        (category === '' || c === category) &&
        (type === '' || t === type) &&
        (location === '' || l.includes(location))
      )
    })

    // Sort yalnız seçilibsə tətbiq et
    if (sort === 'az') filtered.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name))
    else if (sort === 'za') filtered.sort((a, b) => b.dataset.name.localeCompare(a.dataset.name))
    else if (sort === 'offers')
      filtered.sort((a, b) => Number(b.dataset.offers) - Number(a.dataset.offers))
    // 'newest' və boş halda default sıra qalır

    shopList.innerHTML = ''
    if (filtered.length === 0) {
      shopList.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#6b7280;">Nəticə tapılmadı</p>`
    } else {
      filtered.forEach((card) => shopList.appendChild(card))
    }
  }

  // Bütün input və filterlər üçün event
  ;[searchInput, categoryFilter, shopTypeFilter, locationFilter, sortFilter].forEach((el) => {
    el.addEventListener('input', updateShops)
    el.addEventListener('change', updateShops)
  })

  // İlk render
  updateShops()
})
