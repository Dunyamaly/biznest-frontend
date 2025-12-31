// categories.js

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.categories')
  const btn = document.querySelector('.category-right-button')

  if (container && btn) {
    btn.addEventListener('click', () => {
      container.scrollBy({ left: 150, behavior: 'smooth' })
    })
  }
})
