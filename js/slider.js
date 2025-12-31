// slider.js

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide')
  const prevBtn = document.querySelector('.prev')
  const nextBtn = document.querySelector('.next')
  const dotsContainer = document.querySelector('.dots-container')

  if (!slides.length || !dotsContainer || !prevBtn || !nextBtn) return

  let currentIndex = 0
  let interval

  // İlk slide aktiv
  slides[0].classList.add('active')

  // Dot-lar yarat
  slides.forEach((_, index) => {
    const dot = document.createElement('div')
    dot.classList.add('dot')
    if (index === 0) dot.classList.add('active')

    dot.addEventListener('click', () => showSlide(index))
    dotsContainer.appendChild(dot)
  })

  const dots = dotsContainer.querySelectorAll('.dot')

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
