document.addEventListener('DOMContentLoaded', () => {
  // Hər bir kart üçün hover funksiyasını hazırlayan funksiya
  function setupAdvertisingHover(container) {
    if (!container) return

    const images = container.querySelectorAll('img')
    const indicatorsContainer = container.querySelector('.image-indicators')

    if (!images.length || !indicatorsContainer) return

    const count = images.length

    // Indicatorları span-larla yarat
    indicatorsContainer.innerHTML = ''
    for (let i = 0; i < count; i++) {
      const span = document.createElement('span')
      if (i === 0) span.classList.add('active')
      indicatorsContainer.appendChild(span)
    }
    const indicators = indicatorsContainer.querySelectorAll('span')

    // İlk şəkil görünür olsun
    images.forEach((img) => (img.style.opacity = 0))
    images[0].style.opacity = 1

    // Hover zamanı şəkil və indicator dəyişimi
    container.addEventListener('mousemove', (e) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const index = Math.min(count - 1, Math.floor(x / (rect.width / count)))

      images.forEach((img) => (img.style.opacity = 0))
      images[index].style.opacity = 1

      indicators.forEach((ind) => ind.classList.remove('active'))
      indicators[index].classList.add('active')
    })

    // Mouse çıxanda əvvəlki vəziyyətə qaytar
    container.addEventListener('mouseleave', () => {
      images.forEach((img) => (img.style.opacity = 0))
      images[0].style.opacity = 1

      indicators.forEach((ind) => ind.classList.remove('active'))
      indicators[0].classList.add('active')
    })
  }

  // Bütün kartlar üçün funksiyanı aktiv et
  document.querySelectorAll('.advertising-card-images').forEach(setupAdvertisingHover)
})
